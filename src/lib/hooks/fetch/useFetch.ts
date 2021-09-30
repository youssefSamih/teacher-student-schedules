import { useState } from 'react'
import axios from 'axios'
import { R } from 'lib/utils'
import { CONFIG } from 'lib/config'
import { setAxiosDefaults } from 'lib/api'
import { ErrorCodes, ErrorResponse, HttpMethod, KeyValuePair, RequestConfig, Response, Toastify } from 'lib/types'
import { fetchCore } from './core'
import { useToast } from '../useToast'
import { RequestExtras } from './types'
import { useTranslations } from '../stores'

setAxiosDefaults()

export const useFetch = <ResponseType , RequestParams = KeyValuePair>(
    config: RequestConfig,
    extras?: RequestExtras<ResponseType, RequestParams>
) => {
    const T = useTranslations()
    const { setToast } = useToast()
    const [ hasError, setError ] = useState(false)
    const [ isLoading, setLoading ] = useState(extras?.isLoadingAtStart || false)

    return {
        fetchState: {
            hasError,
            isLoading
        },
        fetch: (params?: RequestParams) => {
            const source = axios.CancelToken.source()

            setLoading(true)
            setError(false)

            fetchCore({
                config,
                params,
                source
            })
                .then((response: Response<ResponseType>) => {
                    setError(false)
                    setLoading(false)

                    R.ifDefined(extras && extras.onSuccess, cb => cb(response.data))
                })
                .catch((response: Response<ErrorResponse>) => {
                    const error = response.response

                    setToast({
                        text: T.error.fetchError,
                        type: Toastify.Error
                    })

                    if (error && (error.status >= ErrorCodes.BadRequest || error.status === ErrorCodes.ServerError)) {
                        fetchCore({
                            params,
                            source,
                            config: {
                                url: '/auth/logout',
                                method: HttpMethod.POST
                            }
                        })
                            .catch(R.T)
                            .finally(() => {
                                window.location.replace(`${CONFIG.FULCRUM_URL}/welcome`)
                            })
                    }

                    if (axios.isCancel(response)) {
                        return
                    }

                    setError(true)
                    setLoading(false)

                    R.ifDefined(extras && extras.onError, cb => cb(response.response?.data))
                })

            return () => {
                if (isLoading && source) {
                    source.cancel()
                }
            }
        }
    }
}
