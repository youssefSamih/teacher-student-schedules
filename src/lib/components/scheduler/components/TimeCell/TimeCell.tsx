import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { dateHelpers } from 'lib/utils'
import { colors } from 'lib/styles'
import { TimeCellContainerProps } from './types'

type TimeCellProps = {
    data: {
        date: Date,
        text: string
    }
}

export const TimeCell: React.FunctionComponent<TimeCellProps> = ({ data }) => {
    const fullyBooked = false

    return (
        <TimeCellContainer fullyBooked={fullyBooked}>
            <TimeCellText fullyBooked={fullyBooked}>
                {dateHelpers.toAppointmentTime(data.date)}
            </TimeCellText>
            {fullyBooked && (
                <Icons.Information fill={colors.white} />
            )}
        </TimeCellContainer>
    )
}

const TimeCellContainer = styled.div<TimeCellContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.table.dataCellBorder} !important;
  background-color: ${({ fullyBooked }) => fullyBooked ? colors.redTimeCell : 'none'};
`

const TimeCellText = styled.span<TimeCellContainerProps>`
  font-weight: 300;
  margin-right: 2px;
  color: ${({ fullyBooked }) => fullyBooked ? colors.white : colors.gray.typography};
`
