import React, { useEffect } from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { colors } from 'lib/styles'
import { globalActions } from 'lib/actions'
import { SideMenu, UserRole } from 'lib/types'
import { Header, Menu, WhiteLoader } from 'lib/components'
import { useAdminOnDuty, useConfig, useTeachers, useUser } from 'lib/hooks'

type BodyStyles = {
    fullWidth?: boolean
}

export const AppContainer: React.FunctionComponent = ({
    children
}) => {
    const { state: { sideMenu } } = useConfig()
    const { setUser, user } = useUser()
    const { setAdminOnDutyState } = useAdminOnDuty()
    const { setTeachers } = useTeachers()
    const { fetch: getMe } = globalActions.useGetMe(user => {
        setUser(user)
        getCurrentAoD()
        getTeachers()

        if (user.role === UserRole.Admin) {
            getAoD()
        }
    })
    const { fetch: getAoD } = globalActions.useGetAoD(admins => setAdminOnDutyState({
        admins
    }))
    const { fetch: getCurrentAoD } = globalActions.useGetCurrentAoD(admin => setAdminOnDutyState({
        currentAoD: admin
    }))
    const { fetch: getTeachers } = globalActions.useGetTeachers(data => setTeachers(data.map(item => ({
        ...item,
        id: item.teacherId
    }))))

    useEffect(() => {
        getMe()
    }, [])

    return (
        <Container>
            <Header/>
            <BodyWrapper fullWidth={sideMenu === SideMenu.Hidden}>
                <Menu/>
                <Body>
                    {user && children}
                </Body>
            </BodyWrapper>
            {!user && (
                <WhiteLoader/>
            )}
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const BodyWrapper = styled.div<BodyStyles>`
  display: flex;
  flex: 1;
  height: calc(100% - ${constants.HEADER_HEIGHT}px);
  transition: margin-left 0.3s;
  margin-left: ${props => props.fullWidth ? 0 : constants.MENU_WIDTH}px;
`

const Body = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${colors.layout.background};
`
