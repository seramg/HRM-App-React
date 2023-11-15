import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';


const API = axios.create({
    baseURL: import.meta.env.VITE_DATABASE_URL,
    timeout: 120000,
});

API.interceptors.response.use(onResponse, onResponseError);

export const makeRequest = async <T>(
    method: string,
    url: string,
    payload?: any,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    return API.request<T>({
        method,
        url,
        data: payload,
        ...config,
    });
};
