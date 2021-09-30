import { useCallback, useEffect } from 'react'
import { endOfDay, fromUnixTime, getUnixTime, startOfDay } from 'date-fns'
import { SchedulerFilters } from 'lib/components'
import { useHeader, useScheduler } from 'lib/hooks'
import { useGetAppointments, useGetAvailabilities, useGetUnassignedAppointments } from './actions'

export const useInitializeScheduler = () => {
    const { schedulerState: { date, ready }, setSchedulerState } = useScheduler()
    const { setHeaderState } = useHeader()

    // fetch appointments
    const {
        fetch: getAppointments,
        fetchState: { isLoading: gettingAppointments, hasError: appointmentsError }
    } = useGetAppointments(data => setSchedulerState({
        appointments: data.map(item => ({
            ...item,
            endDate: fromUnixTime(item.endDate),
            startDate: fromUnixTime(item.startDate)
        }))
    }))

    // fetch availabilities
    const {
        fetch: getAvailabilities,
        fetchState: { isLoading: gettingAvailabilities, hasError: availabilitiesError }
    } = useGetAvailabilities(data => setSchedulerState({
        availabilities: (data || [])
            .map(item => ({
                ...item,
                id: item.teacherId
            })),
        teacherAvailabilities: data.reduce((acc, item) => ({
            ...acc,
            [item.teacherId]: item.availabilities
        }), {})
    }))

    // fetch unassigned appointments
    const { fetch: getUnassignedAppointments } = useGetUnassignedAppointments(appointments => setSchedulerState({
        unassignedAppointments: appointments.map(item => ({
            ...item,
            endDate: fromUnixTime(item.endDate),
            startDate: fromUnixTime(item.startDate)
        }))
    }))

    const fetchData = useCallback(() => {
        getAppointments({
            startDate: getUnixTime(startOfDay(new Date(date))),
            endDate: getUnixTime(endOfDay(new Date(date)))
        })
        getAvailabilities({
            startDate: getUnixTime(startOfDay(new Date(date))),
            endDate: getUnixTime(endOfDay(new Date(date)))
        })
    }, [date])

    useEffect(() => {
        if (ready) {
            fetchData()
        }
    }, [fetchData, ready])

    useEffect(() => {
        getUnassignedAppointments()
        setHeaderState(SchedulerFilters)

        return () => {
            setHeaderState(undefined)
        }
    }, [])

    return {
        hasError: availabilitiesError || appointmentsError,
        isLoading: gettingAvailabilities || gettingAppointments,
        retry: fetchData
    }
}
