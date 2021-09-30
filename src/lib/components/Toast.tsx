import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'
import { Typography } from './Typography'

type ToastProps = {
    text: string,
    isDefault?: boolean
}

type TypographyStyles = {
    isDefault?: boolean
}

export const Toast: React.FunctionComponent<ToastProps> = ({ text, isDefault }) => (
    <CustomTypography isDefault={isDefault}>
        {text}
    </CustomTypography>
)

const CustomTypography = styled(Typography)<TypographyStyles>`
  color: ${props => !props.isDefault ? colors.white : colors.typography};
`
