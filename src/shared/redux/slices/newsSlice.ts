import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../hooks/storeHooks'
import { NewsItemType } from '../../types/newsTypes'
import { newsApi } from '../../api/newsApi'

const fetchGetNews = createAppAsyncThunk<NewsItemType[]>('newsSlice/fetchGetNews', async (_, thunkAPI) => {
    try {
        let { data: newsIds } = await newsApi.getNewsIdArray()
        newsIds = newsIds.slice(0, 100)
        if (newsIds && newsIds.length > 0) {
            const newsDetails = await Promise.all(
                newsIds.map(async (id) => {
                    const { data } = await newsApi.getNewsDetail(id);
                    return data;
                })
            );

            return newsDetails.sort((a, b) => b.time - a.time)
        }

        return []

    } catch (e) {
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

const fetchGetComments = createAppAsyncThunk<NewsItemType[], number[]>('newsSlice/fetchGetComments', async (kids, thunkAPI) => {
    try {
        if (kids && kids.length > 0) {
            const commentsDetails = await Promise.all(
                kids.map(async (id) => {
                    const { data } = await newsApi.getNewsDetail(id);
                    return data;
                })
            );

            return commentsDetails.sort((a, b) => b.descendants - a.descendants)
        }

        return []

    } catch (e) {
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

export type InitialStateType = {
    status: '' | 'loading' | 'succeeded' | 'failed'
    commentsStatus: '' | 'loading' | 'succeeded' | 'failed'
    data: null | NewsItemType[]
    error: null | string
    currentNews: null | NewsItemType
}

const initialState: InitialStateType = { status: '', commentsStatus: '', data: null, error: null, currentNews: null }


const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        setCurrentNews: (state, action: PayloadAction<NewsItemType>) => {
            state.currentNews = action.payload
        },
        clearCurrentNews: (state) => {
            state.currentNews = null
        },
        clearCurrentNewsComments: (state) => {
            if (state.currentNews?.comments) {
                state.currentNews.comments = null
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetNews.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchGetNews.fulfilled, (state, action: PayloadAction<NewsItemType[]>) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchGetNews.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
        builder
            .addCase(fetchGetComments.pending, (state) => {
                state.commentsStatus = 'loading'
                state.error = null
            })
            .addCase(fetchGetComments.fulfilled, (state, action: PayloadAction<NewsItemType[]>) => {
                const traverse = (news: NewsItemType) => {
                    if (news.id === action.payload[0].parent) {
                        news.comments = action.payload;
                    } else if (news.comments && news.comments.length > 0) {
                        news.comments.forEach(child => traverse(child));
                    }
                }

                state.commentsStatus = 'succeeded'
                if (state.currentNews && action.payload) {
                    traverse(state.currentNews)
                }
            })
            .addCase(fetchGetComments.rejected, (state, action) => {
                state.commentsStatus = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
    },
    selectors: {
        selectNewsStatus: (state) => state.status,
        selectIsSucceededStatus: (state) => state.status === 'succeeded',
        selectNewsArray: (state) => state.data,
        selectNewsError: (state) => state.error,
        selectOneNewsExists: (state) => state.currentNews?.title != null,
        selectOneNews: (state) => state.currentNews
    },
})

export { fetchGetNews, fetchGetComments }
export const { setCurrentNews, clearCurrentNews, clearCurrentNewsComments } = newsSlice.actions
export const newsReducer = newsSlice.reducer
export const {
    selectNewsStatus,
    selectIsSucceededStatus,
    selectNewsArray,
    selectNewsError,
    selectOneNewsExists,
    selectOneNews } = newsSlice.selectors