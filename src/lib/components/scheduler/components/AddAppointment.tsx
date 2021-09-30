import React from 'react'
import styled from 'styled-components'
import { Appointment } from 'lib/models'
import { useScheduler, useTranslations } from 'lib/hooks'
import { Dialog, DateDropdown, AppointmentSelect } from 'lib/components'
import { TeacherDropDown } from './TeacherDropDown'
import { AppointmentModalFooter } from './AppointmentModalFooter'

type AppointmentModalProps = {
    edit?: Appointment
}

export const AddAppointment: React.FunctionComponent<AppointmentModalProps> = () => {
    const T = useTranslations()
    const { schedulerState, setSchedulerState } = useScheduler()

    return schedulerState.appointmentModal?.add ? (
        <Dialog
            minWidth={600}
            title={T.adminka.scheduler.appointmentModal.addAppointment}
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
        >
            <TeacherDropDown withBottomMargin/>
            <AppointmentSelect/>
            <Date>
                <DateDropdown/>
            </Date>
        </Dialog>
    ) : null
}

const Date = styled.div`
  margin-top: 16px;
`
