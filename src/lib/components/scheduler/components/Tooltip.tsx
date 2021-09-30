import React from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { colors } from 'lib/styles'

type TooltipPopperProps = {
    popperWidth?: number,
    rightPosition?: number
}

type TooltipProps = TooltipPopperProps & {
    action?: React.ReactNode
}

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
    children,
    popperWidth,
    action,
    rightPosition = 130
}) => (
    <TooltipContainer>
        {children}
        <TooltipPopper
            popperWidth={popperWidth}
            rightPosition={rightPosition}
        >
            <TooltipTriangle />
            <ToolTipContent>
                {action}
            </ToolTipContent>
        </TooltipPopper>
    </TooltipContainer>
)

const TooltipPopper = styled.div<TooltipPopperProps>`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  z-index: 1000;
  margin: ${({ rightPosition }) => `35px ${rightPosition}px 0 0`};
  background-color: ${colors.white};
  width: ${({ popperWidth }) => (popperWidth ? `${popperWidth}px` : 'auto')};
  box-shadow: ${constants.POPPER_HOVER_BOX_SHADOW};
  :hover {
    cursor: initial;
  }
`

const TooltipContainer = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    ${TooltipPopper} {
      display: flex;
    }
  }
`

const TooltipTriangle = styled.div`
  position: absolute;
  top: -8px;
  right: 39px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${colors.white};
`

const ToolTipContent = styled.div`
  padding: 24px 16px;
  color: ${colors.gray.typography};
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
`
