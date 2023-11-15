import { AxiosRequestConfig, AxiosResponse } from "axios";
import { makeRequest } from ".";

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return makeRequest<T>('get', url, null, config);
};

export const postData = async <T>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    return makeRequest<T>('post', url, payload, config);
};

export const updateData = async <T>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    return makeRequest<T>('put', url, payload, config);
};

export const deleteData = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return makeRequest<T>('delete', url, null, config);
};