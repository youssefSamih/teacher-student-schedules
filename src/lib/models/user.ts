import { Nullable, UserRole } from '../types'

export type User = {
    userUid: string,
    firstName: string,
    lastName: string,
    language: Nullable<string>,
    timezone: string,
    photoUrl: Nullable<string>,
    role: UserRole
}
