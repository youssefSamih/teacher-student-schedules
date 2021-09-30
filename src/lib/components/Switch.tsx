import React from 'react'
import styled from 'styled-components'
import { colors, stylesHelpers } from '../styles'

type SwitchProps = {
    toggled: boolean,
    onClick: VoidFunction
}

type SwitchStyles = {
    toggled: boolean
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
    toggled,
    onClick
}) => (
    <Container
        toggled={toggled}
        onClick={onClick}
    >
        <Circle toggled={toggled}/>
    </Container>
)

const Container = styled.div<SwitchStyles>`
  width: 60px;
  height: 30px;
  cursor: pointer;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  background-color: ${props => props.toggled ? colors.iosGreen : colors.gray.border};
`

const Circle = styled.div<SwitchStyles>`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  position: absolute;
  transition: left 0.3s;
  left: ${props => props.toggled ? 60 - 27 : 5}px;
  background-color: ${colors.white};
  box-shadow: 0 0 18px ${stylesHelpers.customBlackTransparent(0.16)};
`
