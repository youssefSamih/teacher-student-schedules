import { useMemo } from 'react'
import { compareAsc } from 'date-fns'
import { constants } from 'common'
import { SchedulerAppointment } from 'lib/types'
import { dateHelpers } from 'lib/utils'
import { groupAppointmentsByHour, getAppointmentsCountsAndHours } from '../groupByDate'

type UnassignedAppointmentsType = {
    date: string,
    appointments: Array<SchedulerAppointment>
}

export const useUnassignedAppointments = ({ appointments, date }: UnassignedAppointmentsType) => {
    const { unassignedAppointmentsCount, backgroundColor, hours } = getAppointmentsCountsAndHours(appointments, new Date())
    const groupedAppointments = useMemo(() => {
        const sortedAppointments = appointments
            .filter(appointment => dateHelpers.isDateLessOrEqual({
                appointmentStartDate: appointment.startDate,
                hours: constants.RED_TIME_FRAME_HOURS,
                selectedDate: new Date()
            }))
            .sort((appointmentToSort, nextAppointment) => compareAsc(appointmentToSort.startDate, nextAppointment.startDate))

        return groupAppointmentsByHour(sortedAppointments)
    }, [appointments, date])

    return ({
        groupedAppointments,
        unassignedAppointmentsCount,
        hours,
        backgroundColor
    })
}
