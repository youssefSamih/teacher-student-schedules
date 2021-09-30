import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Icons } from 'assets'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { NeiRoute } from 'lib/types'
import { Link } from 'lib/components'
import { navigationUtils, textUtils } from 'lib/utils'
import { Collapse } from '../Collapse'
import { Typography } from '../Typography'

type TabProps = {
    route: NeiRoute,
    path?: string,
    collapsedTabs: Array<string>,
    onClick(route: NeiRoute): void
}

type TabStyles = {
    isActive: boolean
}

export const SubTab: React.FunctionComponent<TabProps> = ({
    route,
    onClick,
    collapsedTabs,
    path = ''
}) => {
    const { pathname } = useLocation()
    const isActive = pathname.includes(route.path.replaceAll('/', ''))

    if (route.routes) {
        const isSelected = collapsedTabs.includes(route.path.replaceAll('/', ''))

        return (
            <Container
                onClick={event => {
                    onClick(route)
                    event.stopPropagation()
                    navigationUtils.GOTO(path?.concat(route.path))
                }}
            >
                <Wrapper isActive={isActive}>
                    <Name>
                        {textUtils.upperCaseFirstLetter(route.name)}
                    </Name>
                    {route.routes && isSelected && (
                        <Icons.ArrowDown
                            width={16}
                            height={16}
                        />
                    )}
                    {!isSelected && (
                        <Icons.ArrowRight
                            width={16}
                            height={16}
                        />
                    )}
                </Wrapper>
                <Collapse collapsed={isSelected}>
                    {route.routes.map((localRoute, index) => (
                        <SubTab
                            route={localRoute}
                            collapsedTabs={collapsedTabs}
                            path={path?.concat(route.path)}
                            key={`${localRoute.name}-${index}`}
                            onClick={() => onClick(localRoute)}
                        />
                    ))}
                </Collapse>
            </Container>
        )
    }

    return (
        <Container
            onClick={event => {
                onClick(route)
                event.stopPropagation()

                if (!route.link) {
                    navigationUtils.GOTO(path?.concat(route.path))
                }
            }}
        >
            {!route.link && (
                <Wrapper isActive={isActive}>
                    <Name>
                        {textUtils.upperCaseFirstLetter(route.name)}
                    </Name>
                </Wrapper>
            )}
            {route.link && (
                <Link link={route.link}>
                    <Wrapper isActive={isActive}>
                        <Name>
                            {textUtils.upperCaseFirstLetter(route.name)}
                        </Name>
                    </Wrapper>
                </Link>
            )}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: ${constants.SIDE_MENU_WIDTH}px;
  :hover {
    cursor: pointer;
  }
`

const Wrapper = styled.div<TabStyles>`
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid ${colors.gray.border};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${props => props.isActive ? colors.primary : colors.gray.typography};
  :hover {
    color: ${colors.primary} !important;
  }
`

const Name = styled(Typography)`
  color: inherit;
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
`
