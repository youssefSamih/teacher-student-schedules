import axios from 'axios'
import { ErrorResponse, KeyValuePair, RequestConfig, Response } from 'lib/types'
import { fetchCore } from './core'

export const useFetchPromise = <ResponseType , RequestParams = KeyValuePair>(
    config: RequestConfig
) => ({
    fetch: (params?: RequestParams)=> {
        const source = axios.CancelToken.source()

        return fetchCore({
            config,
            params,
            source
        })
            .then((response: Response<ResponseType>) => response.data as ResponseType)
            .catch((response: Response<ErrorResponse>) => {
                if (axios.isCancel(response)) {
                    return
                }

                throw new Error()
            }) as Promise<ResponseType>
    }
})
