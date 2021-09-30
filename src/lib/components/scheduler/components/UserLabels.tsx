import React from 'react'
import styled from 'styled-components'
import { stylesHelpers, colors } from 'lib/styles'
import { labelAppointmentsMock } from './mocks'

type UserLabelsProps = {
    width?: number,
    height?: number
}

type LabelAppointmentsProps = UserLabelsProps & {
    labelColor: string
}

export const UserLabels: React.FunctionComponent<UserLabelsProps> = ({
    width = 8,
    height = 8
}) => (
    <Label>
        {labelAppointmentsMock.map(label => (
            <LabelAppointment
                key={label.labelUUID}
                labelColor={label.labelColor}
                width={width}
                height={height}
            />
        ))}
    </Label>
)

const Label = styled.div`
  margin-top: 4px;
  display: flex;
`

const LabelAppointment = styled.div<LabelAppointmentsProps>`
  background-color: ${({ labelColor }) => labelColor};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  box-shadow: 0 0 30px ${stylesHelpers.customBlackTransparent(0.16)};
  border: 1px solid ${colors.white};
  border-radius: 2px;
  margin-right: 2px;
`
