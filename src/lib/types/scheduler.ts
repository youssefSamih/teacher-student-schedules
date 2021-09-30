import { Nullable } from './common'
import { Teacher } from '../models'
import { ResourcesIds } from '../components'

export enum SchedulerOptions {
    CurrentDate = 'currentDate',
    Width = 'width',
    DataSource = 'dataSource',
    Resources = 'resources'
}

export type Availability = {
    end: number,
    isBusy: boolean,
    isInvitationOnly: boolean,
    start: number,
    type: string
}

export type TeacherResource = Teacher & {
    id: number,
    availabilities: Array<Availability>
}

export enum AppointmentType {
    OneOnOne = 1,
    WarmUp = 2
}

export type AppointmentUser = {
    email: string,
    name: string,
    phone: string,
    photo: Nullable<string>,
    surname: string,
    userUid: string
}

export type SchedulerAppointment = {
    teacherId: Nullable<number>,
    startDate: Date,
    endDate: Date,
    user: AppointmentUser,
    appointmentType: AppointmentType
}

export type Timezone = {
    timezone: string,
    offset: string
}

export type Groups = {
    teacherId: number
}

export type Resource = {
    fieldExpr: ResourcesIds,
    dataSource: Array<TeacherResource>
}
