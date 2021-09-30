import React, { useState } from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { colors } from '../styles'
import { Typography } from './Typography'

type TooltipProps = {
    text?: string
}

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
    children,
    text
}) => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <Container
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <TooltipText>
                    <Typography>
                        {text}
                    </Typography>
                </TooltipText>
            )}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`

const TooltipText = styled.div`
  position: absolute;
  top: 120%;
  z-index: 1000;
  background-color: ${colors.white};
  border-radius: 8px;
  border: 1px solid ${colors.gray.border};
  box-shadow: ${constants.POPPER_HOVER_BOX_SHADOW};
  text-align: center;
  padding: 12px;
  min-width: 200px;
  :after, :before {
    content: '';
    display: block;
    position: absolute;
    left: 100%;
    width: 0;
    height: 0;
    border-style: solid;
  }
  :after {
    top: -20px;
    left: calc(50% - 10px);
    border-color: transparent transparent ${colors.white} transparent;
    border-width: 10px;
  }
  :before {
    top: -22px;
    left: calc(50% - 11px);
    border-color: transparent transparent ${colors.gray.border} transparent;
    border-width: 11px;
  }
`
