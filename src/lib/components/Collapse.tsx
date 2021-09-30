import React from 'react'
import styled from 'styled-components'
import { useResize } from 'lib/hooks'

type CollapseProps = {
    collapsed: boolean,
    noTransition?: boolean
}

type CollapseStyle = CollapseProps & {
    height: number
}

export const Collapse: React.FunctionComponent<CollapseProps> = ({
    collapsed,
    children
}) => {
    const { ref, item: { height } } = useResize()

    return (
        <Container
            height={height}
            collapsed={collapsed}
        >
            <Children
                ref={ref}
                height={height}
                collapsed={collapsed}
            >
                {children}
            </Children>
        </Container>
    )
}

const Container = styled.div<CollapseStyle>`
  ${({ noTransition }) => !noTransition ? 'transition: height 0.25s linear;' : ''}
  height: ${props => props.collapsed ? props.height : 0}px;
  position: relative;
`

const Children = styled.div<CollapseStyle>`
  position: absolute;
  visibility: ${props => props.collapsed ? 'visible' : 'hidden'};
  width: 100%;
`
