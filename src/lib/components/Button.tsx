import React from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { SvgIcon } from 'lib/types'
import { colors, stylesHelpers } from 'lib/styles'
import { Loader } from './Loader'

type ButtonProps = {
    LeftIcon?: React.FunctionComponent<SvgIcon>,
    RightIcon?: React.FunctionComponent<SvgIcon>,
    Icon?: React.FunctionComponent<SvgIcon>,
    onClick?: VoidFunction,
    textColor?: string,
    backgroundColor?: string,
    extraSpacing?: boolean,
    isLoading?: boolean,
    disabled?: boolean
}

type ButtonStyle = {
    iconButton?: boolean,
    textColor?: string,
    backgroundColor?: string,
    extraSpacing?: boolean
}

export const Button: React.FunctionComponent<ButtonProps> = ({
    LeftIcon,
    RightIcon,
    children,
    Icon,
    onClick,
    backgroundColor,
    textColor,
    extraSpacing,
    isLoading,
    disabled
}) => (
    <BareButton
        textColor={textColor}
        iconButton={Boolean(Icon)}
        extraSpacing={extraSpacing}
        backgroundColor={backgroundColor}
        onClick={event => {
            if (disabled) {
                return
            }

            const button = event.currentTarget
            const circle = document.createElement('span')
            const diameter = Math.max(button.clientWidth, button.clientHeight)
            const radius = diameter / 2

            circle.style.width = circle.style.height = `${diameter}px`
            circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
            circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
            circle.classList.add('ripple')

            const ripple = button.getElementsByClassName('ripple').item(0)

            if (ripple) {
                ripple.remove()
            }

            button.appendChild(circle)

            if (onClick) {
                onClick()
            }
        }}
    >
        {!Icon && LeftIcon && (
            <LeftIconWrapper>
                <LeftIcon
                    width={20}
                    height={20}
                />
            </LeftIconWrapper>
        )}
        {!Icon && !isLoading && children}
        {!Icon && isLoading && (
            <Loader
                size={20}
                color={backgroundColor ? colors.white : undefined}
            />
        )}
        {Icon && (
            <Icon
                width={20}
                height={20}
            />
        )}
        {!Icon && RightIcon && (
            <RightIconWrapper>
                <RightIcon
                    width={20}
                    height={20}
                />
            </RightIconWrapper>
        )}
    </BareButton>
)

const BareButton = styled.div<ButtonStyle>`
  display: flex;
  align-items: center;
  border-radius: 50px;
  position: relative;
  padding: ${props => props.extraSpacing ? '10px 30px' : props.iconButton ? `10px` : `10px 15px`};
  background-color: ${props => props.backgroundColor || colors.white};
  box-shadow: ${constants.BOX_SHADOW};
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  overflow: hidden;
  color: ${props => props.textColor || colors.typography};
  transition: background-color 0.2s linear;
  :hover {
    background-color: ${props => props.backgroundColor
        ? stylesHelpers.hexToRGBA(props.backgroundColor, 0.7)
        : stylesHelpers.hexToRGBA(colors.primary, 0.2)
};
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: ${props => stylesHelpers.hexToRGBA(props.backgroundColor || colors.gray.border, 0.7)};
  }
`

const LeftIconWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`

const RightIconWrapper = styled.div`
  margin-left: 5px;
  display: flex;
`
