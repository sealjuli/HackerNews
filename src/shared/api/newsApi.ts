// import { AxiosResponse } from 'axios'
import { instance } from './instance'
import { NewsIdArrayType, NewsItemType } from '../types/newsTypes';

export const newsApi = {

    // postLoginUser(user: LoginUserType) {
    //     return instance.post<LoginUserResponseType, AxiosResponse<LoginUserResponseType>, LoginUserType>('/auth/login', user);
    // },
    getNewsIdArray() {
        return instance.get<NewsIdArrayType>('/beststories.json');
    },
    getNewsDetail(id: number) {
        return instance.get<NewsItemType>(`/item/${id}.json`);
    },
}