import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ContentDeliveryConfig } from './config';
/**
 * Interface describing the default API parameters.
 */
export interface ApiParameters {
    /**
     * Properties to include in the response.
     */
    select?: string;
    /**
     * Properties to expand in the response.
     */
    expand?: string;
}
/**
 * Interface describing the default API headers.
 */
export interface ApiHeaders {
    /**
     * Branch of the content
     */
    ['Accept-Language']?: string;
}
/**
 * Class for making API calls to the Content Delivery API.
 */
export declare class ApiClient {
    #private;
    /**
     * Constructs an instance of ApiClient.
     *
     * @param config Configuration to use.
     */
    constructor(config: ContentDeliveryConfig);
    /**
     * Sets the function to call for getting an access token
     * to authorize the request.
     *
     * @param onBeforeRequest - Function to use.
     */
    set onBeforeRequest(onBeforeRequest: (config: AxiosRequestConfig) => AxiosRequestConfig);
    /**
     * Make a GET request.
     *
     * @param path - Path to request.
     * @param parameters - Parameters to include in the request.
     * @param headers - Headers to include in the request.
     * @returns A promise with an AxiosResponse if the request was successful, otherwise rejected with an AxiosError.
     */
    get(path: string, parameters?: ApiParameters, headers?: ApiHeaders): Promise<AxiosResponse<any>>;
    /**
     * Get default API parameters to use when making requests.
     *
     * @param select - Properties to include in the response. All by default, unless configured differently.
     * @param expand - Properties to expand in the response. None by default, unless configured differently.
     * @returns Default parameters combined with the default configuration.
     */
    getDefaultParameters(select?: Array<string>, expand?: Array<string>): ApiParameters;
    /**
     * Get default API headers to use when making requests.
     *
     * @param branch - Branch of the content.
     * @returns Default headers combined with the default configuration.
     */
    getDefaultHeaders(branch?: string): ApiHeaders;
}
