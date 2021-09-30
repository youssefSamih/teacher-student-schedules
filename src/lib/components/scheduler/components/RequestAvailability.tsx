import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { useScheduler, useTranslations } from 'lib/hooks'
import { Dialog, DatePicker, OutlinedInput } from 'lib/components'
import { TeacherDropDown } from './TeacherDropDown'

type RequestAvailabilityState = {
    dateFrom?: Date,
    dateTo?: Date,
    message: string
}

export const RequestAvailability: React.FunctionComponent = () => {
    const T = useTranslations()
    const { schedulerState, setSchedulerState } = useScheduler()
    const [ requestAvailabilityState, setRequestAvailabilityState ] = useState<RequestAvailabilityState>({
        message: ''
    })

    return schedulerState.appointmentModal?.request ? (
        <Dialog
            minWidth={600}
            title={T.adminka.scheduler.appointmentModal.requestAvailability}
            onClose={() => setSchedulerState({
                appointmentModal: undefined
            })}
            actions={[
                {
                    name: T.common.cancel
                },
                {
                    color: colors.white,
                    backgroundColor: colors.primary,
                    name: T.adminka.scheduler.requestAvailability.request
                }
            ]}
        >
            <TeacherDropDown withBottomMargin/>
            <Dates>
                <DateFrom>
                    <DatePicker
                        withInput
                        label={T.common.dateFrom}
                        controlledData={requestAvailabilityState.dateFrom?.toISOString()}
                        onChange={([ date ]) => setRequestAvailabilityState(prevState => ({
                            ...prevState,
                            dateFrom: date
                        }))}
                    />
                </DateFrom>
                <DateTo>
                    <DatePicker
                        withInput
                        label={T.common.dateTo}
                        controlledData={requestAvailabilityState.dateFrom?.toISOString()}
                        onChange={([ date ]) => setRequestAvailabilityState(prevState => ({
                            ...prevState,
                            dateTo: date
                        }))}
                    />
                </DateTo>
            </Dates>
            <OutlinedInput
                multiline={5}
                label={T.common.message}
                onChange={value => setRequestAvailabilityState(prevState => ({
                    ...prevState,
                    message: value
                }))}
            />
        </Dialog>
    ) : null
}

const Dates = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const DateFrom = styled.div`
  flex: 1;
  margin-right: 16px;
`

const DateTo = styled.div`
  flex: 1;
`
