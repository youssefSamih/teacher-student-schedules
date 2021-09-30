import React, { useState } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { Collapse } from 'lib/components'
import { colors } from 'lib/styles'
import { SchedulerAppointment } from 'lib/types'
import { AppointmentCell } from './AppointmentCell'

type UnassignedAppointmentLayoutProps = {
    date: string,
    appointments: Array<SchedulerAppointment>
}

type TimeContainerProps = {
    collapsed?: boolean
}

export const UnassignedAppointmentLayout: React.FunctionComponent<UnassignedAppointmentLayoutProps> = ({ date, appointments }) => {
    const [collapsed, setCollapsed] = useState(true)
    const ArrowComponent = collapsed ? Icons.ArrowUp : Icons.ArrowDown

    return (
        <AppointmentsContainer>
            <TimeContainer
                onClick={() => setCollapsed(prevState => !prevState)}
                collapsed={collapsed}
            >
                <AppointmentTime>
                    {date}
                </AppointmentTime>
                <ArrowComponent width={16} />
            </TimeContainer>
            <Collapse
                noTransition
                collapsed={collapsed}
            >
                {appointments.map((appointmentData, index) => {
                    const appointmentObjectData = { appointmentData }

                    return (
                        <AppointmentCellContainer key={`${appointmentData.user.name}-${index}`}>
                            <AppointmentCell
                                index={index}
                                data={appointmentObjectData}
                            />
                        </AppointmentCellContainer>
                    )
                })}
            </Collapse>
        </AppointmentsContainer>
    )
}

const AppointmentsContainer = styled.div`
  margin: 23px;
`

const TimeContainer = styled.div<TimeContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding-bottom: 27px;
  ${({ collapsed }) => !collapsed ? `border-bottom: 1px solid ${colors.gray.background};` : ''}
`

const AppointmentTime = styled.div`
  margin-right: 10px;
`

const AppointmentCellContainer = styled.div`
  margin-bottom: 14px;
`
