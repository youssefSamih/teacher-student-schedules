import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { textUtils } from 'lib/utils'
import { SchedulerAppointment } from 'lib/types'
import { useScheduler, useTranslations } from 'lib/hooks'
import { UnassignedAppointmentLayout } from './UnassignedAppointmentLayout'
import { BacklogHeader } from './BacklogHeader'
import { SchedulerSizes } from '../constants'
import { useUnassignedAppointments } from '../utils'
import { SearchUnassigned } from './SearchUnassigned'

type ContainerStyles = {
    backlogOpen: boolean
}

type UnassignedAppointmentsProps = {
    appointments: Array<SchedulerAppointment>
}

export const UnassignedAppointments: React.FunctionComponent<UnassignedAppointmentsProps> = ({ appointments }) => {
    const T = useTranslations()
    const [showSearch, setShowSearch] = useState(false)
    const { schedulerState: { backlogOpen, date } } = useScheduler()
    const {
        unassignedAppointmentsCount,
        groupedAppointments,
        backgroundColor,
        hours
    } = useUnassignedAppointments({ appointments, date })

    useEffect(() => {
        if (!backlogOpen) {
            setShowSearch(false)
        }
    }, [backlogOpen])

    return (
        <Container backlogOpen={backlogOpen}>
            <Wrapper>
                <TopSection>
                    {showSearch ? (
                        <SearchUnassigned onCancelClick={() => setShowSearch(false)} />
                    ) : (
                        <Fragment>
                            <Title>
                                {textUtils.upperCaseFirstLetter(T.adminka.scheduler.unassignedAppointments.title)}
                            </Title>
                            <BacklogHeader
                                unassignedAppointmentsCount={unassignedAppointmentsCount}
                                backgroundColor={backgroundColor}
                                hours={hours}
                                onSearchClick={() => setShowSearch(true)}
                            />
                        </Fragment>
                    )}
                </TopSection>
            </Wrapper>
            <BodyWrapper>
                {Object.entries(groupedAppointments)?.map(([date, appointments])=> (
                    <UnassignedAppointmentLayout
                        date={date}
                        appointments={appointments}
                        key={date}
                    />
                ))}
            </BodyWrapper>
        </Container>
    )
}

const Container = styled.div<ContainerStyles>`
  height: 100%;
  width: ${props => props.backlogOpen ? SchedulerSizes.SideModal : 0}px;
  background-color: ${colors.white};
  overflow: hidden;
  margin-left: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${SchedulerSizes.SideModal}px;
`

const TopSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${colors.gray.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const BodyWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
`

const Title = styled.div``
