import React from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { Button } from 'lib/components'
import { useTranslations } from 'lib/hooks'

type AppointmentModalFooterProps = {
    onCancel: VoidFunction
}

export const AppointmentModalFooter: React.FunctionComponent<AppointmentModalFooterProps> = ({ onCancel }) => {
    const T = useTranslations()

    return (
        <Footer>
            <CancelButton onClick={onCancel}>
                <Button extraSpacing>
                    {T.common.cancel}
                </Button>
            </CancelButton>
            <Confirm>
                <Button
                    extraSpacing
                    textColor={colors.white}
                    backgroundColor={colors.primary}
                >
                    {T.adminka.scheduler.appointmentModal.addAppointment}
                </Button>
            </Confirm>
        </Footer>
    )
}

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const CancelButton = styled.div`
  margin-left: auto;
  margin-right: 22px;
`

const Confirm = styled.div``
