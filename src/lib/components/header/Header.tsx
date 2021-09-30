import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { routes } from 'lib/routing'
import { SideMenu, UserRole } from 'lib/types'
import { useConfig, useHeader, useUser } from 'lib/hooks'
import { User } from './User'
import { SelectAod } from './SelectAod'
import { AdminOnDuty } from './AdminOnDuty'

export const Header: React.FunctionComponent = () => {
    const { user } = useUser()
    const { setState, state } = useConfig()
    const { headerState } = useHeader()
    const { Element } = headerState

    return (
        <Container>
            <MenuWrapper>
                <Icons.Menu
                    onClick={event => {
                        event.preventDefault()
                        event.stopPropagation()

                        if (state.sideMenu === SideMenu.Hidden) {
                            return setState({
                                sideMenu: SideMenu.Icons
                            })
                        }

                        if (state.collapsedTabs.includes(state.mainTab)) {
                            return setState({
                                collapsedTabs: []
                            })
                        }

                        if (!routes.find(item => item.name === state.mainTab)?.routes) {
                            return setState({
                                sideMenu: SideMenu.Hidden
                            })
                        }

                        setState({
                            collapsedTabs: [state.mainTab]
                        })
                    }}
                />
            </MenuWrapper>
            {Element && (
                <GenericSection>
                    <Element/>
                </GenericSection>
            )}
            <RightSection>
                {user?.role !== UserRole.Admin && (
                    <AdminOnDuty/>
                )}
                {user?.role === UserRole.Admin && (
                    <SelectAod/>
                )}
                <User/>
            </RightSection>
        </Container>
    )
}

const Container = styled.div`
  height: 95px;
  width: 100%;
  box-shadow: ${constants.BOX_SHADOW};
  display: flex;
  align-items: center;
  z-index: 300;
  background-color: ${colors.white};
`

const MenuWrapper = styled.div`
  width: ${constants.MENU_WIDTH}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightSection = styled.div`
  height: 45px;
  margin-left: auto;
  padding-right: 40px;
  display: flex;
  align-items: center;
`

const GenericSection = styled.div`
  flex: 1;
`
