import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from '@services/token';

const BASE_URL = 'http://localhost:3000';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: REQUEST_TIMEOUT,
    });

    api.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            const token = getToken();

            if (token) {
                //@ts-ignore
                config.headers['x-token'] = token;
            }

            return config;
        },
    );

    return api;
}