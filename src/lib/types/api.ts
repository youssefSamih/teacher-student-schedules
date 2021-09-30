import { KeyValuePair } from './common'

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete'
}

export enum ApiPrefix {
    User = 'user',
    Scheduler = 'scheduler'
}

export enum ErrorCodes {
    Unauthorized = 401,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    TooManyRequests = 429,
    ServerError = 500,
    WsServerError = 505
}
export type RequestConfig = {
    url: string,
    method: HttpMethod,
    apiPrefix?: ApiPrefix
}

export type OnSuccessResponse<T = undefined> = (data: T) => void
export type OnErrorResponse = (error: ErrorResponse) => void

export type Response<T> = {
    data: T,
    status: number,
    statusText: string,
    headers: KeyValuePair,
    config: KeyValuePair,
    response?: Response<T>
}

export type ErrorResponse = {
    statusCode?: number,
    errorCode?: number,
    callTime?: string
}
