import { Nullable } from '../types'

export type Admin = {
    userUid: string,
    firstName: string,
    lastName: string,
    photoUrl: Nullable<string>,
    languageCode: Nullable<string>,
    timezone: Nullable<string>
}
