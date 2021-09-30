import { AppointmentType, AppointmentUser, Nullable } from 'lib/types'

export type GetAppointments = {
    teacherUid?: string,
    startDate: number,
    endDate: number
}

export type GetAvailabilities = {
    teacherUid?: string,
    startDate: number,
    endDate: number
}

export type ApiAppointment = {
    teacherId: Nullable<number>,
    startDate: number,
    endDate: number,
    user: AppointmentUser,
    appointmentType: AppointmentType
}
