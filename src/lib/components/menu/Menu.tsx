import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { useConfig } from 'lib/hooks'
import { SideMenu, UserRole } from 'lib/types'
import { ClickAwayComponent } from 'lib/components'
import { navigationUtils, valueTranslations } from 'lib/utils'
import { Tab } from './Tab'
import { SubTab } from './SubTab'

type MenuStyles = {
    isOpen?: boolean
}

export const Menu = () => {
    const { pathname } = useLocation()
    const { setState, state } = useConfig()
    // todo get it from store
    const myRoutes = valueTranslations.getAccessibleRoutes(UserRole.Admin)
        .filter(item => !item.hidden)
    const subTabs = myRoutes.find(item => item.name === state.mainTab)
    const subRoutes = subTabs?.routes || []

    useEffect(() => {
        setState({
            mainTab: myRoutes.find(route => pathname.includes(route.path.replaceAll('/', '')))?.name || ''
        })
    }, [])

    return (
        <ClickAwayComponent
            onClickOutside={() => setState({
                collapsedTabs: [],
                mainTab: pathname.replaceAll('/', '')
            })}
        >
            <Container>
                <MainTabs isOpen={state.sideMenu !== SideMenu.Hidden}>
                    {myRoutes.map((route, index) => (
                        <Tab
                            route={route}
                            key={`${route.name}-${index}`}
                            isActive={pathname.includes(route.path.replaceAll('/', ''))}
                            onClick={route => {
                                if (!route.routes && !route.link) {
                                    navigationUtils.GOTO(route.path)
                                }

                                setState({
                                    mainTab: route.name,
                                    collapsedTabs: route.routes
                                        ? [route.path]
                                        : []
                                })
                            }}
                        />
                    ))}
                </MainTabs>
                <SideTabs isOpen={state.collapsedTabs?.length > 0}>
                    {subRoutes.map((route, index) => (
                        <SubTab
                            route={route}
                            key={`${route.name}-${index}`}
                            collapsedTabs={state.collapsedTabs}
                            onClick={route => {
                                const cleanPath = route.path.replaceAll('/', '')

                                if (state.collapsedTabs.includes(cleanPath)) {
                                    return setState({
                                        collapsedTabs: state.collapsedTabs.filter(item => item !== cleanPath),
                                        sideMenu: SideMenu.Icons
                                    })
                                }

                                setState({
                                    collapsedTabs: state.collapsedTabs.concat(cleanPath),
                                    sideMenu: SideMenu.Icons
                                })
                            }}
                        />
                    ))}
                </SideTabs>
            </Container>
        </ClickAwayComponent>
    )
}

const Container = styled.div<MenuStyles>`
  position: fixed;
  left: 0;
  display: flex;
  height: calc(100% - ${constants.HEADER_HEIGHT}px);
  border-radius: 0 16px 16px 0;
  box-shadow: ${constants.BOX_SHADOW};
  background-color: ${colors.white};
  overflow-y: auto;
  min-width: ${props => props.isOpen ? constants.MENU_WIDTH : 0}px;
  z-index: 200;
`

const MainTabs = styled.div<MenuStyles>`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  transition: width 0.3s, opacity 0.3s;
  width: ${props => props.isOpen ? constants.MENU_WIDTH : 0}px;
  opacity: ${props => props.isOpen ? '1' : '0'};
`

const SideTabs = styled.div<MenuStyles>`
  border-left: 1px solid ${colors.gray.border};
  width: ${props => props.isOpen ? constants.SIDE_MENU_WIDTH : 0}px;
  background-color: ${colors.white};
  transition: width 0.3s;
  transform: ${props => props.isOpen ? `translateX(0px)` : `translateX(-${2 * constants.SIDE_MENU_WIDTH}px)`};
  padding: 25px 0;
  overflow: hidden;
  > div {
    padding-right: 20px;
  }
`
