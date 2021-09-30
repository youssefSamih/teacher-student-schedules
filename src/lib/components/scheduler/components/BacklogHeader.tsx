import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { useTranslations } from 'lib/hooks'
import { Tooltip } from './Tooltip'

type NotificationCircleProps = {
    backgroundColor?: string
}

type BacklogHeaderProps = {
    unassignedAppointmentsCount: number,
    hours: number,
    backgroundColor: string,
    onSearchClick?: VoidFunction
}

export const BacklogHeader: React.FunctionComponent<BacklogHeaderProps> = ({
    unassignedAppointmentsCount,
    backgroundColor,
    hours,
    onSearchClick
}) => {
    const T = useTranslations()
    const unassignedCount = unassignedAppointmentsCount >= 100 ? constants.COUNT_GREATER_THAN_100 : unassignedAppointmentsCount
    const tooltipMessage = `${unassignedAppointmentsCount > 1 ? T.adminka.scheduler.unassignedAppointments.thereAre : T.adminka.scheduler.unassignedAppointments.thereIs}`
        .concat(` ${unassignedAppointmentsCount} `)
        .concat(`${T.adminka.scheduler.unassignedAppointments.unassignedAppointmentsStart}`)
        .concat(` ${hours} `)
        .concat(`${T.adminka.scheduler.unassignedAppointments.hours}`)

    return (
        <RightHeaderContainer>
            {unassignedAppointmentsCount > 0 && (
                <Tooltip
                    action={(
                        <Action>
                            {tooltipMessage}
                        </Action>
                    )}
                    popperWidth={200}
                >
                    <NotificationCircle backgroundColor={backgroundColor}>
                        {unassignedCount}
                    </NotificationCircle>
                </Tooltip>
            )}
            <Icons.Search
                onClick={onSearchClick}
                width={18}
                height={18}
            />
        </RightHeaderContainer>
    )
}

const RightHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NotificationCircle = styled.div<NotificationCircleProps>`
  margin-right: 25px;
  padding: 5px;
  width: 35px;
  height: 35px;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.success};
  border-radius: 100%;
  cursor: pointer;
`

const Action = styled.div`
  text-transform: none;
`
