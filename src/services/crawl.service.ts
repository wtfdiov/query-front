import { Query } from 'interfaces/Query';
import { QueryData } from 'interfaces/QueryData';
import { QueryResult } from 'interfaces/QueryResult';
import api from './api';

export async function getById(id: string): Promise<QueryData> {
    const result = await api.get(`/crawl/${id}`);
    return result.data;
}

export async function create(keyword: Query): Promise<QueryResult> {
    const result = await api.post(`/crawl`, keyword);
    return result.data;
}