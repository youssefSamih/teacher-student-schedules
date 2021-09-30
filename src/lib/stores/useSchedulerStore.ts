import React, { useEffect, useState } from 'react'
import { Scheduler } from 'devextreme-react/scheduler'
import { ResourcesIds } from 'lib/components'
import { Availability, KeyValuePair, SchedulerAppointment, SchedulerOptions, TeacherResource, Resource } from 'lib/types'
import { useTeachers } from '../hooks'

type UseSchedulerStoreState = {
    schedulerRef?: React.RefObject<Scheduler>,
    date: string,
    ready: boolean,
    backlogOpen: boolean,
    unassignedAppointments: Array<SchedulerAppointment>,
    availabilities: Array<TeacherResource>,
    appointments: Array<SchedulerAppointment>,
    teacherAvailabilities: KeyValuePair<Array<Availability>>,
    appointmentModal?: {
        add?: boolean,
        edit?: SchedulerAppointment,
        request?: boolean
    }
}

const today = new Date()

export const useSchedulerStore = () => {
    const { teachers } = useTeachers()
    const [ schedulerState, setSchedulerState ] = useState<UseSchedulerStoreState>({
        date: today.toISOString(),
        ready: false,
        backlogOpen: true,
        unassignedAppointments: [],
        availabilities: [],
        appointments: [],
        teacherAvailabilities: {}
    })

    useEffect(() => {
        if (schedulerState.schedulerRef?.current) {
            schedulerState.schedulerRef?.current?.instance.option(SchedulerOptions.DataSource, schedulerState.appointments)
        }
    }, [schedulerState.appointments])

    useEffect(() => {
        if (schedulerState.schedulerRef?.current && schedulerState.availabilities.length > 0) {
            const resource = (schedulerState.schedulerRef.current.instance.option(SchedulerOptions.Resources) as Array<Resource>)
                .find(item => item.fieldExpr === ResourcesIds.TeacherId)
            const modifiedResource = resource?.dataSource
                .map(resource => ({
                    ...resource,
                    availabilities: schedulerState.availabilities.find(item => item.teacherId === resource.teacherId)?.availabilities
                }))

            schedulerState.schedulerRef?.current?.instance.option(SchedulerOptions.Resources, [])
            schedulerState.schedulerRef?.current?.instance.option(SchedulerOptions.Resources, [{
                fieldExpr: ResourcesIds.TeacherId,
                dataSource: modifiedResource
            }])
        }
    }, [schedulerState.availabilities])

    useEffect(() => {
        schedulerState.schedulerRef?.current?.instance.option(SchedulerOptions.Resources, [{
            fieldExpr: ResourcesIds.TeacherId,
            dataSource: teachers
        }])
    }, [teachers])

    return {
        schedulerState,
        setSchedulerState: (state: Partial<UseSchedulerStoreState>) => setSchedulerState(prevState => ({
            ...prevState,
            ...state
        })),
        schedulerActions: {
            setCurrentDate: (date: Date) => schedulerState.schedulerRef?.current?.instance.option(SchedulerOptions.CurrentDate, date)
        }
    }
}
