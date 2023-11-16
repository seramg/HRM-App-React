import { AxiosRequestConfig } from "axios";
import { makeRequest } from ".";

export const getData = async (url: string, config?: AxiosRequestConfig)=> {
    return makeRequest('get', url, null, config);
};

export const postData = async(url: string, payload: object, config?: AxiosRequestConfig) => {
    return makeRequest('post', url, payload, config);
};

export const updateData = async(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
) => {
    return makeRequest('put', url, payload, config);
};

export const deleteData = async (url: string, config?: AxiosRequestConfig)=> {
    return makeRequest('delete', url, null, config);
};