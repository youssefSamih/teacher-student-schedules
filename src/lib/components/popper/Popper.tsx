import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { PopperAnchor } from 'lib/types'
import { colors, stylesHelpers } from 'lib/styles'
import { usePopper, useResize, useWindowClick, useWindowScroll } from 'lib/hooks'
import { Typography } from '../Typography'
import { useGetProperCords, useGetTriangleCords } from './hooks'

type PopperStyles = {
    isOpen: boolean,
    cords?: DOMRect,
    customWidth?: number,
    anchor?: PopperAnchor,
    bare?: boolean
}

type TriangleStyle = {
    anchor?: PopperAnchor,
    left: number,
    top: number,
    colorTriangle: boolean
}

export const Popper: React.FunctionComponent = () => {
    const [ colorTriangle, setColorTriangle ] = useState(false)
    const [ opened, setOpened ] = useState(false)
    const { ref, item: { height, width }, refresh } = useResize()
    const {
        popperState: { actions, anchor, width: customWidth, position = PopperAnchor.Bottom, parentAnchor, bare, triangleLeftPosition },
        popperActions: { setPopperState }
    } = usePopper()
    const elCords = anchor?.getBoundingClientRect()
    const properCords = useGetProperCords({
        cords: elCords,
        refWidth: width,
        refHeight: height,
        position
    })
    const { top, left } = useGetTriangleCords({
        originalCords: elCords,
        newCords: properCords.cords,
        position
    })

    useWindowClick(() => opened && anchor && setPopperState({
        anchor: undefined,
        triangleLeftPosition: undefined,
        width: undefined
    }), [parentAnchor])

    useWindowScroll(() => opened && anchor && setPopperState({
        anchor: undefined,
        triangleLeftPosition: undefined,
        width: undefined
    }))

    useEffect(() => {
        refresh()

        if (!anchor) {
            setOpened(false)
        }
    }, [anchor])

    return (
        <Container
            ref={ref}
            bare={bare}
            anchor={position}
            isOpen={Boolean(anchor)}
            customWidth={customWidth}
            cords={properCords.cords}
            onClick={event => event.stopPropagation()}
            onTransitionEnd={() => anchor && setOpened(true)}
        >
            <Wrapper>
                {actions?.map((item, index) => (
                    <Action
                        key={index}
                        bare={bare}
                        onClick={event => {
                            event.stopPropagation()

                            if (item.onClick) {
                                item.onClick()
                            }
                        }}
                        onMouseLeave={() => setColorTriangle(false)}
                        onMouseEnter={() => {
                            if (position === PopperAnchor.Bottom && index === 0) {
                                setColorTriangle(true)
                            }

                            if (position === PopperAnchor.Top && index === actions?.length - 1) {
                                setColorTriangle(true)
                            }
                        }}
                    >
                        {item.name}
                    </Action>
                ))}
            </Wrapper>
            <Triangle
                top={top || 0}
                left={triangleLeftPosition || left || 0}
                anchor={position}
                colorTriangle={colorTriangle}
            />
        </Container>
    )
}

const Container = styled.div<PopperStyles>`
  position: absolute;
  transition: opacity 0.15s;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 16px;
  top: ${props => props.cords?.y || 0}px;
  left: ${props => props.cords?.x || 0}px;
  z-index: 1000;
  width: ${props => props.customWidth ? `${props.customWidth}px` : 'auto' };
  box-shadow: ${constants.POPPER_BOX_SHADOW};
  margin-bottom: ${props => props.anchor === PopperAnchor.Top ? 20 : 0}px;
  margin-left: ${props => props.anchor === PopperAnchor.Right ? 20 : 0}px;
  margin-top: ${props => props.anchor === PopperAnchor.Bottom ? 20 : 0}px;
  margin-right: ${props => props.anchor === PopperAnchor.Left ? 20 : 0}px;
  :hover {
    cursor: ${props => props.bare ? 'initial' : 'pointer'};
  }
`

const Wrapper = styled.div`
  > div:last-child {
    border-bottom: none !important;
    margin-bottom: 0 !important;
    padding-bottom: 16px !important;
    border-radius: 0 0 16px 16px;
    > div {
      border-bottom: none !important;
      margin-bottom: 0 !important;
      padding-bottom: 0 !important;
    }
  }
  > div:first-child {
    padding-top: 16px !important;
    border-radius: 16px 16px 0 0;
  }
`

const Action = styled(Typography)<Partial<PopperStyles>>`
  padding: 16px;
  border-bottom: ${props => props?.bare ? 'none' : `1px solid ${colors.gray.border}`};
  display: flex;
  align-items: center;
  color: ${colors.gray.typography};
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
  :hover {
    cursor: ${props => props?.bare ? 'initial' : 'pointer'};
    color: ${props => props?.bare ? colors.gray.typography : colors.primary};
    background-color: ${props => props?.bare ? '' : stylesHelpers.customBlackTransparent(0.04)};
  }
`

const Triangle = styled.label<TriangleStyle>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: 0;
  height: 0;
  ${props => {
        if (props.anchor === PopperAnchor.Left) {
            return `
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              border-left: 10px solid ${colors.white};
            `
        }

        if (props.anchor === PopperAnchor.Right) {
            return `
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              border-right: 10px solid ${colors.white};
            `
        }

        if (props.anchor === PopperAnchor.Top) {
            return `
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 10px solid ${colors.white};
            `
        }

        return `
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid ${colors.white};
        `
    }}
`
