import { ErrorResponse, KeyValuePair } from 'lib/types'

export type RequestExtras<T, R> = {
    initialState?: T,
    isLoadingAtStart?: boolean,
    onSuccess?(data: T): void,
    onError?(data: ErrorResponse): void
}

export type RequestParams = KeyValuePair
