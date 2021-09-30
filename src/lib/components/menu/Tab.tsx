import React from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { NeiRoute } from 'lib/types'
import { Link } from 'lib/components'
import { Typography } from '../Typography'

type TabProps = {
    route: NeiRoute,
    isActive: boolean,
    onClick(route: NeiRoute): void
}

type TabStyles = {
    isActive: boolean
}

export const Tab: React.FunctionComponent<TabProps> = ({
    route,
    isActive,
    onClick
}) => {
    const { Icon, name } = route
    const color = isActive
        ? colors.white
        : colors.typography

    const body = (
        <Container
            isActive={isActive}
            onClick={() => onClick(route)}
        >
            {Icon && (
                <Icon fill={color}/>
            )}
            <Name isActive={isActive}>
                {name}
            </Name>
        </Container>
    )

    return route.link ? (
        <Link link={route.link}>
            {body}
        </Link>
    ) : body
}

const Container = styled.div<TabStyles>`
  min-height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.MENU_WIDTH}px;
  background-color: ${props => props.isActive ? colors.primary : colors.white};
  :hover {
    cursor: pointer;
  }
`

const Name = styled(Typography)<TabStyles>`
  margin-top: 10px;
  color: ${props => props.isActive ? colors.white : colors.typography};
  font-size: 12px;
`
