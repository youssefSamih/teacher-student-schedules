import { useFetch } from '../hooks'
import { Admin, Teacher, User } from '../models'
import { ApiPrefix, HttpMethod, OnSuccessResponse, Timezone } from '../types'
import { ChangeAoDRequest } from './type'

export const useGetMe = (onSuccess: OnSuccessResponse<User>) =>
    useFetch({
        url: '/user/me',
        method: HttpMethod.GET,
        apiPrefix: ApiPrefix.User
    }, {
        onSuccess
    })

export const useGetAoD = (onSuccess: OnSuccessResponse<Array<Admin>>) =>
    useFetch({
        url: '/admin',
        method: HttpMethod.GET,
        apiPrefix: ApiPrefix.User
    }, {
        onSuccess
    })

export const useGetCurrentAoD = (onSuccess: OnSuccessResponse<Admin>) =>
    useFetch({
        url: '/duty',
        method: HttpMethod.GET,
        apiPrefix: ApiPrefix.Scheduler
    }, {
        onSuccess
    })

export const useChangeCurrentAoD = (onSuccess: OnSuccessResponse) =>
    useFetch<undefined, ChangeAoDRequest>({
        url: '/duty',
        method: HttpMethod.POST,
        apiPrefix: ApiPrefix.Scheduler
    }, {
        onSuccess
    })

export const useGetTeachers = (onSuccess: OnSuccessResponse<Array<Teacher>>) =>
    useFetch<Array<Teacher>>({
        url: '/teacher',
        method: HttpMethod.GET,
        apiPrefix: ApiPrefix.User
    }, {
        onSuccess
    })

export const useGetTimezone = (onSuccess: OnSuccessResponse<Array<Timezone>>) =>
    useFetch({
        url: '/timezone',
        method: HttpMethod.GET,
        apiPrefix: ApiPrefix.Scheduler
    }, {
        onSuccess
    })
