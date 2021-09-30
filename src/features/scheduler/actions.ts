import { useFetch } from 'lib/hooks'
import {
    ApiPrefix,
    HttpMethod,
    OnSuccessResponse,
    TeacherResource
} from 'lib/types'
import { ApiAppointment, GetAppointments, GetAvailabilities } from './types'

export const useGetAppointments = (onSuccess: OnSuccessResponse<Array<ApiAppointment>>) =>
    useFetch<Array<ApiAppointment>, GetAppointments>({
        url: '/appointment',
        apiPrefix: ApiPrefix.Scheduler,
        method: HttpMethod.GET
    }, {
        onSuccess
    })

export const useGetUnassignedAppointments = (onSuccess: OnSuccessResponse<Array<ApiAppointment>>) =>
    useFetch<Array<ApiAppointment>, GetAppointments>({
        url: '/appointment/unassigned',
        apiPrefix: ApiPrefix.Scheduler,
        method: HttpMethod.GET
    }, {
        onSuccess
    })

export const useGetAvailabilities = (onSuccess: OnSuccessResponse<Array<TeacherResource>>) =>
    useFetch<Array<TeacherResource>, GetAvailabilities>({
        url: '/availability',
        apiPrefix: ApiPrefix.Scheduler,
        method: HttpMethod.GET
    }, {
        onSuccess
    })
