import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ContentDeliveryConfig } from './config';
export declare class ApiClient {
    #private;
    constructor(config: ContentDeliveryConfig);
    set onBeforeRequest(onBeforeRequest: (config: AxiosRequestConfig) => AxiosRequestConfig);
    get(path: string, parameters?: any, headers?: any): Promise<AxiosResponse<any>>;
}
