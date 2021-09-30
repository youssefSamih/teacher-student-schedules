import React, { useCallback, useEffect, useRef, useState } from 'react'
import equals from 'deep-equal'
import { Scheduler } from 'devextreme-react/scheduler'
import { AppointmentFormOpeningEvent, CellClickEvent } from 'devextreme/ui/scheduler'
import { Availability, Groups, KeyValuePair } from 'lib/types'
import { Teacher } from './Teacher'
import { DataCell } from './DataCell'
import { TimeCell } from './TimeCell'
import { ResourcesIds, View } from '../types'
import { AppointmentCell } from './AppointmentCell'

type SchedulerMemoProps = {
    height: number,
    width: number,
    backlogOpen: boolean,
    isLoading: boolean,
    teacherAvailabilities: KeyValuePair<Array<Availability>>,
    onInitialized(ref: React.RefObject<Scheduler>): void,
    getIsBusyCell(groups: Groups, startDate: Date): boolean,
    onCellClick(event: CellClickEvent): void
}

export const SchedulerMemo = React.memo<SchedulerMemoProps>(({
    height,
    onInitialized,
    width,
    getIsBusyCell,
    onCellClick,
    isLoading
}) => {
    const [ canRender, setCanRender ] = useState(false)
    const [ canRenderCells, setCanRenderCells ] = useState(false)
    const schedulerRef = useRef<Scheduler>(null)
    const onAppointmentFormOpening = (event: AppointmentFormOpeningEvent) => {
        event.cancel = true
    }

    const renderCell = useCallback((props: any) => {
        const isBusy = getIsBusyCell(props.groups, props.startDate)

        return (
            <DataCell
                {...props}
                isBusy={isBusy}
                canRender={canRenderCells}
            />
        )
    }, [canRenderCells])

    const renderTeacher = useCallback((props: any, index: number) => (
        <Teacher
            {...props}
            index={index}
            canRender={canRender}
            onRendered={() => setCanRenderCells(true)}
        />
    ), [canRender])

    useEffect(() => {
        if (isLoading) {
            setCanRender(false)
            setCanRenderCells(false)
        }

        if (!isLoading) {
            setCanRender(true)
        }
    }, [isLoading])

    return (
        <Scheduler
            width={width}
            height={height}
            firstDayOfWeek={0}
            // ref does exist
            // @ts-ignore
            ref={schedulerRef}
            crossScrollingEnabled
            currentView={View.Day}
            showAllDayPanel={false}
            onCellClick={onCellClick}
            dataCellRender={renderCell}
            timeCellComponent={TimeCell}
            groups={[ResourcesIds.TeacherId]}
            resourceCellRender={renderTeacher}
            appointmentComponent={AppointmentCell}
            onInitialized={() => onInitialized(schedulerRef)}
            onAppointmentFormOpening={onAppointmentFormOpening}
            onCurrentDateChange={() => {
                setCanRender(false)
                setCanRenderCells(false)
            }}
        />
    )
}, (prevProps, nextProps) =>
    prevProps.height === nextProps.height &&
    prevProps.width === nextProps.width &&
    prevProps.backlogOpen === nextProps.backlogOpen &&
    equals(prevProps.teacherAvailabilities, nextProps.teacherAvailabilities) &&
    prevProps.isLoading === nextProps.isLoading
)
