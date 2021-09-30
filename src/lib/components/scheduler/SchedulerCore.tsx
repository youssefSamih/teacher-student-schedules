import React, { useCallback } from 'react'
import styled from 'styled-components'
import { getUnixTime } from 'date-fns'
import type { CellClickEvent } from 'devextreme/ui/scheduler'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { Groups } from 'lib/types'
import { useResize, useScheduler, useTranslations } from 'lib/hooks'
import { WhiteLoader, ErrorComponent, ResourcesIds } from 'lib/components'
import { SchedulerClasses, SchedulerSizes } from './constants'
import {
    UnassignedAppointments,
    Header,
    EditAppointment,
    SchedulerMemo,
    RequestAvailability,
    AddAppointment,
    Legend
} from './components'

type SchedulerCoreProps = {
    isLoading: boolean,
    error: boolean,
    retry: VoidFunction
}

type ContainerStyles = {
    backlogOpen: boolean,
    isSchedulerReady: boolean
}

export const SchedulerCore: React.FunctionComponent<SchedulerCoreProps> = ({
    isLoading,
    error,
    retry
}) => {
    const T = useTranslations()
    const { ref, item: { height, width } } = useResize()
    const { schedulerState, setSchedulerState } = useScheduler()
    const schedulerWidth = schedulerState.backlogOpen
        ? width - SchedulerSizes.SideModal - 20
        : width

    const getIsBusyCell = useCallback((groups: Groups, startDate: Date) => {
        const availabilities = groups
            ? schedulerState.teacherAvailabilities[groups[ResourcesIds.TeacherId]]
            : []
        const isCurrentCell = availabilities?.find(item => item.start === getUnixTime(startDate))

        return !isCurrentCell
    }, [schedulerState])

    const onCellClick = (event: CellClickEvent) => {
        const isBusy = getIsBusyCell(event.cellData.groups, event.cellData.startDate)

        if (!isBusy) {
            setSchedulerState({
                appointmentModal: {
                    add: true
                }
            })
        }
    }

    return (
        <Container
            ref={ref}
            isSchedulerReady={schedulerState.ready}
            backlogOpen={schedulerState.backlogOpen}
        >
            <Header/>
            <Legend/>
            <SchedulerWrapper
                isSchedulerReady={schedulerState.ready}
                backlogOpen={schedulerState.backlogOpen}
            >
                <SchedulerMemo
                    height={height}
                    isLoading={isLoading}
                    width={schedulerWidth}
                    backlogOpen={schedulerState.backlogOpen}
                    teacherAvailabilities={schedulerState.teacherAvailabilities}
                    onCellClick={onCellClick}
                    getIsBusyCell={getIsBusyCell}
                    onInitialized={ref => setSchedulerState({
                        schedulerRef: ref,
                        ready: true
                    })}
                />
                {isLoading && (
                    <WhiteLoader/>
                )}
            </SchedulerWrapper>
            <UnassignedAppointments appointments={schedulerState.unassignedAppointments} />
            <AddAppointment />
            <RequestAvailability/>
            <EditAppointment/>
            {error && (
                <ErrorComponent
                    retry={retry}
                    text={T.error.fetchError}
                />
            )}
        </Container>
    )
}

const Container = styled.div<ContainerStyles>`
  height: 100%;
  display: flex;
  transition: opacity 0.5s;
  position: relative;
  opacity: ${props => props.isSchedulerReady ? 1 : 0};
  .${SchedulerClasses.Header} {
    background-color: ${colors.white};
    height: ${SchedulerSizes.Header}px;
    width: 100%;
  }
  .${SchedulerClasses.WorkSpace} {
    margin-top: -${SchedulerSizes.Header}px;
    padding-top: ${SchedulerSizes.Header}px;
  }
  .${SchedulerClasses.Navigator}, .${SchedulerClasses.ViewSwitcher} {
    display: none;
  }
  .${SchedulerClasses.AllDayTitle} {
    display: none !important;
  }
  .${SchedulerClasses.TimeIndicator}::before {
    content: '';
  }
  .${SchedulerClasses.HeaderPanel} {
    margin-top: 0;
  }
  .${SchedulerClasses.SchedulerGroupRow}:first-child {
    .${SchedulerClasses.HeaderGroupContent} > div {
      overflow: unset;
      height: ${SchedulerSizes.ResourceHeight}px;
      position: relative;
      z-index: 0;
    }
  }
  .${SchedulerClasses.AppointmentContent} {
    padding: unset;
    overflow: unset;
    width: 100%;
  }
  .${SchedulerClasses.Appointment} {
    z-index: 1;
    min-width: 250px;
    padding: 0 4px;
    border: none !important;
    background-color: unset !important;
    :hover {
      background-color: unset !important;
    }
  }
  .${SchedulerClasses.CellHorizontal}, .${SchedulerClasses.HeaderGroup} {
    width: ${SchedulerSizes.CellWidth}px;
    border-right: none !important;
  }
  .${SchedulerClasses.TimePanelCell} {
    padding: 0;
    height: 50px;
    border-bottom: none;
    vertical-align: bottom;
    :after {
      display: none;
    }
  }
  .${SchedulerClasses.TableCell} {
    border: none;
    padding: 0;
    border-right: 2px solid ${colors.table.cellBorder} !important;
    border-bottom: 2px solid ${colors.table.cellBorder} !important;
  }
  .${SchedulerClasses.TableRow} > td {
    border: none !important;
    padding: unset !important;
    margin: unset !important;
  }
  .${SchedulerClasses.HeaderScrollable} {
    height: ${SchedulerSizes.ResourceHeight}px !important;
  }
  .${SchedulerClasses.StateHover} {
    p {
      display: block;
    }
  }
`

const SchedulerWrapper = styled.div<ContainerStyles>`
  position: relative;
  > :first-child {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: ${constants.BOX_SHADOW};
    width: ${props => !props.backlogOpen ? '100%' : `calc(100% - ${SchedulerSizes.SideModal + 20}px)`};
  }
`
