import { configureStore } from '@reduxjs/toolkit'
import { newsReducer } from './slices/newsSlice';

export const store = configureStore({
    reducer: {
        newsSlice: newsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;