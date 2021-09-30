import React, { useRef } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from 'lib/styles'
import { CONFIG } from 'lib/config'
import { textUtils } from 'lib/utils'
import { EmptyAvatar } from 'lib/components'
import { usePopper, useTranslations, useUser } from 'lib/hooks'
import { Badge } from '../Badge'
import { FullLoader } from '../Loader'
import { Typography } from '../Typography'

export const User: React.FunctionComponent = () => {
    const T = useTranslations()
    const ref = useRef<HTMLDivElement>(null)
    const { popperActions: { setPopperState } } = usePopper()
    const { user } = useUser()

    return (
        <Container>
            <Badge
                Icon={Icons.Bell}
                visible
            />
            {!user && (
                <FullLoader/>
            )}
            {user && (
                <UserWrapper
                    ref={ref}
                    onClick={() => ref.current && setPopperState({
                        anchor: ref.current,
                        width: 240,
                        actions: [
                            {
                                name: T.adminka.header.account,
                                onClick: () => {}
                            },
                            {
                                name: T.adminka.header.notifications,
                                onClick: () => {}
                            },
                            {
                                name: T.adminka.header.logout,
                                onClick: () => window.location.replace(`${CONFIG.FULCRUM_URL}/welcome`)
                            }
                        ]
                    })}
                >
                    <UserContainer>
                        <Name>
                            {`${user.firstName} ${user.lastName}`}
                        </Name>
                        <Role>
                            {textUtils.upperCaseFirstLetter(user.role)}
                        </Role>
                    </UserContainer>
                    <EmptyAvatar/>
                </UserWrapper>
            )}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 100%;
  border-left: 1px solid ${colors.gray.border};
  min-width: 100px;
  position: relative;
`

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const Name = styled(Typography)`
  font-size: 14px;
  font-weight: lighter;
  color: ${colors.typography};
`

const Role = styled(Typography)`
  font-size: 11px;
  color: ${colors.primary};
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
