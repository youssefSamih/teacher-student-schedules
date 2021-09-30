import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { Button, Typography } from 'lib/components'
import { AppointmentType, SchedulerAppointment } from 'lib/types'
import { useTranslations } from 'lib/hooks'
import { dateHelpers } from 'lib/utils'
import { colors } from 'lib/styles'
import { UserDetailsAction } from './UserDetailsAction'
import { VariantType } from '../types'

type UserPopupActionProps = {
    appointmentData: SchedulerAppointment,
    variant?: VariantType
}

export const UserPopupAction: React.FunctionComponent<UserPopupActionProps> = ({ appointmentData, variant }) => {
    const T = useTranslations()
    const isWarmup = appointmentData.appointmentType === AppointmentType.WarmUp
    const isVip = appointmentData.appointmentType === AppointmentType.OneOnOne
    const timeStart = dateHelpers.toAppointmentTime(new Date(appointmentData.startDate))
    const timeEnd = dateHelpers.toAppointmentTime(new Date(appointmentData.endDate))

    return  (
        <Action>
            <ActionBody>
                <EditButton>
                    <Button Icon={Icons.Edit} />
                </EditButton>
                <LabelUser>
                    {appointmentData.user.name} {appointmentData.user.surname}
                </LabelUser>
                {isWarmup && (
                    <UserDetailsAction
                        variant={variant}
                        Icon={Icons.Warmup}
                        textDetails={T.adminka.scheduler.variants.warmup}
                    />
                )}
                {isVip && (
                    <UserDetailsAction
                        variant={variant}
                        iconSize={28}
                        iconMarginLeft={-7}
                        Icon={Icons.Vip}
                        textDetails={T.adminka.scheduler.variants.vip}
                    />
                )}
                <UserDetailsAction
                    Icon={Icons.Alarm}
                    textDetails={`${timeStart} - ${timeEnd}`}
                />
            </ActionBody>
            <ActionBody>
                <LabelAction>
                    {T.adminka.scheduler.appointment.contactDetails}
                </LabelAction>
                <UserDetailsAction
                    Icon={Icons.Phone}
                    textDetails={appointmentData.user.phone}
                />
                <UserDetailsAction
                    Icon={Icons.Email}
                    textDetails={appointmentData.user.email}
                />
            </ActionBody>
            <Button backgroundColor={colors.gray.typography}>
                <ButtonText>
                    {T.adminka.scheduler.appointment.joinRoom}
                </ButtonText>
            </Button>
        </Action>
    )
}

const Action = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`

const ActionBody = styled.div`
  margin-bottom: 28px;
`

const LabelAction = styled(Typography)`
  margin: 0 0 10px 0;
`

const LabelUser = styled(Typography)`
  margin: 0 0 10px 0;
  font-size: 16px;
`

const ButtonText = styled.span`
  color: ${colors.white};
  width: 137px;
  padding: 7px;
  display: flex;
  justify-content: center;
`

const EditButton = styled.div`
  position: absolute;
  right: 8px;
  top: 1px;
  padding: 0;
  div {
    box-shadow: none;
  }
`
