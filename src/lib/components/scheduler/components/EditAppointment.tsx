import React from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { textUtils } from 'lib/utils'
import { useScheduler, useTranslations } from 'lib/hooks'
import { DateDropdown, Dialog, AppointmentSelect, Typography } from 'lib/components'
import { AppointmentModalFooter } from './AppointmentModalFooter'

export const EditAppointment: React.FunctionComponent = () => {
    const T = useTranslations()
    const { schedulerState, setSchedulerState } = useScheduler()

    return schedulerState.appointmentModal?.edit ? (
        <Dialog
            minWidth={600}
            title={T.adminka.scheduler.appointmentModal.editAppointment}
            customFooter={(
                <AppointmentModalFooter
                    onCancel={() => setSchedulerState({
                        appointmentModal: undefined
                    })}
                />
            )}
            onClose={() => setSchedulerState({
                appointmentModal: undefined
            })}
            subtitle={(
                <Subtitle>
                    {textUtils.upperCaseFirstLetter(T.adminka.scheduler.appointmentModal.subtitleInfo)}
                    <Colored>
                        {/* todo*/}
                        3
                    </Colored>
                </Subtitle>
            )}
        >
            <AppointmentSelect/>
            <DateWrapper>
                <DateDropdown/>
            </DateWrapper>
        </Dialog>
    ) : null
}

const DateWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
`

const Subtitle = styled(Typography)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const Colored = styled(Typography)`
  color: ${colors.primary};
  margin-left: 5px;
  font-weight: bold;
`
