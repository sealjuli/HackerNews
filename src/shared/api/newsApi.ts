import { instance } from './instance'
import { NewsIdArrayType, NewsItemType } from '../types/newsTypes';

export const newsApi = {
    getNewsIdArray() {
        return instance.get<NewsIdArrayType>('/beststories.json');
    },
    getNewsDetail(id: number) {
        return instance.get<NewsItemType>(`/item/${id}.json`);
    },
}