import { Nullable } from '../types'

export type Teacher = {
    teacherUid: string,
    teacherId: number,
    photoUrl: Nullable<string>,
    firstName: string,
    lastName: string,
    timezoneId: number,
    id: number,
    email: string,
    skills?: {
        warmup?: boolean,
        oneVsOne?: boolean,
        vip?: boolean
    }
}

export type Appointment = {
    appointmentId: number
}
