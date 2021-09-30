import React, { useRef } from 'react'
import styled from 'styled-components'
import { Typography } from 'lib/components'
import { SchedulerAppointment } from 'lib/types'
import { colors, stylesHelpers } from 'lib/styles'
import { usePopper } from 'lib/hooks'
import { useSchedulerLegend } from '../constants'
import { UserPopupAction } from './UserPopupAction'
import { UserLabels } from './UserLabels'

type AppointmentCellProps = {
    data: {
        appointmentData: SchedulerAppointment
    },
    index: number
}

type AppointmentCellStyles = {
    backgroundColor: string
}

export const AppointmentCell: React.FunctionComponent<AppointmentCellProps> = ({ data }) => {
    const variants = useSchedulerLegend()
    const { popperActions: { setPopperState } } = usePopper()
    const appointmentRef = useRef(null)
    const variant = variants.find(item => item.variant === data.appointmentData.appointmentType)

    return (
        <Container
            backgroundColor={variant?.color || colors.primary}
            onClick={() =>
                setPopperState({
                    bare: true,
                    width: 275,
                    anchor: appointmentRef.current,
                    triangleLeftPosition: 25,
                    actions: [
                        {
                            name: (
                                <UserPopupAction
                                    appointmentData={data.appointmentData}
                                    variant={variant}
                                />
                            )
                        }
                    ]
                })
            }
        >
            <Text ref={appointmentRef}>
                {`${data.appointmentData.user.name} ${data.appointmentData.user.surname}`}
            </Text>
            <UserLabels />
        </Container>
    )
}

const Container = styled.div<AppointmentCellStyles>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  padding: 7px 17px 16px;
  border-radius: 8px;
  box-shadow: 0 0 30px ${stylesHelpers.customBlackTransparent(0.16)};
`

const Text = styled(Typography)`
  font-size: 14px;
  line-height: 16px;
  color: ${colors.white};
  width: 250px;
`
