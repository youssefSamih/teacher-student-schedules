import qs from 'qs'
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import { HttpMethod, RequestConfig } from 'lib/types'
import { RequestParams } from './types'

type FetchPipeConfig = {
    config: RequestConfig,
    source: CancelTokenSource,
    params?: RequestParams
}

export const fetchCore = ({
    config,
    params,
    source
}: FetchPipeConfig) => {
    const requestConfig: AxiosRequestConfig = {
        ...config,
        url: config.apiPrefix ? `${config.apiPrefix}${config.url}` : config.url,
        cancelToken: source.token,
        data: config.method !== HttpMethod.GET ? params || {} : undefined,
        params: config.method === HttpMethod.GET ? params : undefined,
        paramsSerializer: config.method === HttpMethod.GET
            ? params => qs.stringify(params)
            : undefined
    }

    return axios(requestConfig)
}
