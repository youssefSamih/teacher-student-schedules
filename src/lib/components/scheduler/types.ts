import type { AppointmentType, TeacherResource } from 'lib/types'

export enum View {
    Day = 'day',
    Week = 'week',
    Month = 'month'
}

export enum ResourcesIds {
    TeacherId = 'teacherId'
}

export type VariantType = {
    variant: AppointmentType,
    name: string,
    color: string
}

export type ResourceCellType = {
    index: number,
    data: TeacherResource
}

export type AppointmentLabel = {
    labelColor: string,
    labelUUID: string,
    labelName: string,
    labelDescription?: string
}
