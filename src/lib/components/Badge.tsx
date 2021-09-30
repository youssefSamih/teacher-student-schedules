import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { SvgIcon } from '../types'
import { colors } from '../styles'

type BadgeProps = {
    Icon: FunctionComponent<SvgIcon>,
    color?: string,
    visible?: boolean,
    number?: number
}

type BadgeStyles = {
    color?: string
}

export const Badge: React.FunctionComponent<BadgeProps> = ({
    Icon,
    number,
    visible,
    color
}) => (
    <Container>
        <Icon/>
        {visible && (
            <Dot color={color}>
                {number}
            </Dot>
        )}
    </Container>
)

const Container = styled.div`
  position: relative;
  display: flex;
`

const Dot = styled.div<BadgeStyles>`
  color: ${colors.white};
  background-color: ${props => props.color || colors.primary};
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border: 2px solid ${colors.white};
`
