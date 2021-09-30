import { colors } from 'lib/styles'
import { AppointmentLabel } from '../types'

export const labelAppointmentsMock: Array<AppointmentLabel> = [
    {
        labelUUID: '1',
        labelColor: colors.warmup,
        labelName: 'warmup'
    },
    {
        labelUUID: '2',
        labelColor: colors.red,
        labelName: 'red'
    },
    {
        labelUUID: '3',
        labelColor: colors.success,
        labelName: 'success'
    }
]
