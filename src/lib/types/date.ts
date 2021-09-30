import { Nullable } from './common'

export type DateFnsDate = Nullable<string | Date | number>

export enum Timer {
    Second = 1000,
    Minute = 60 * 1000
}
