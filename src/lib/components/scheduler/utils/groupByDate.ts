import { constants } from 'common'
import { colors } from 'lib/styles'
import type { KeyValuePair, SchedulerAppointment } from 'lib/types'
import { dateHelpers } from 'lib/utils'

export const groupAppointmentsByHour = (appointments: Array<SchedulerAppointment>) => appointments.reduce((acc, appointment) => {
    const date = dateHelpers.toAppointmentTime(appointment.startDate).toString()

    return {
        ...acc,
        [date]: !Array.isArray(acc[date])
            ? [appointment]
            : [
                ...acc[date],
                appointment
            ]
    }
}, {} as KeyValuePair<Array<SchedulerAppointment>>)

export const getAppointmentsCountsAndHours = (appointments: Array<SchedulerAppointment>, selectedDate: Date) => {
    const appointmentsLessThanTwentyFourHours = appointments.filter(appointment => dateHelpers.isDateLessOrEqual({
        appointmentStartDate: appointment.startDate,
        hours: constants.RED_TIME_FRAME_HOURS,
        selectedDate
    })).length

    if (appointmentsLessThanTwentyFourHours > 0) {
        return {
            unassignedAppointmentsCount: appointmentsLessThanTwentyFourHours,
            hours: constants.RED_TIME_FRAME_HOURS,
            backgroundColor: colors.red
        }
    }

    const appointmentsLessThanFortyEightHours = appointments.filter(appointment => dateHelpers.isDateLessOrEqual({
        appointmentStartDate: appointment.startDate,
        hours: constants.GREEN_OR_YELLOW_TIME_FRAME_HOURS,
        selectedDate
    })).length

    if (appointmentsLessThanFortyEightHours > 0) {
        return {
            unassignedAppointmentsCount: appointmentsLessThanFortyEightHours,
            hours: constants.GREEN_OR_YELLOW_TIME_FRAME_HOURS,
            backgroundColor: colors.yellow
        }
    }

    const appointmentsGreaterThanFortyEightHours = appointments.filter(appointment => dateHelpers.isDateLessOrEqual({
        appointmentStartDate: appointment.startDate,
        hours: constants.GREEN_OR_YELLOW_TIME_FRAME_HOURS,
        selectedDate
    })).length

    return {
        unassignedAppointmentsCount: appointmentsGreaterThanFortyEightHours,
        hours: constants.GREEN_OR_YELLOW_TIME_FRAME_HOURS,
        backgroundColor: colors.success
    }
}
