import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from '../styles'

type EmptyAvatarProps = {
    width?: number,
    height?: number
}

export const EmptyAvatar: React.FunctionComponent<EmptyAvatarProps> = ({
    height = 50,
    width = 50
}) => (
    <Avatar>
        <AvatarIcon>
            <Icons.Avatar
                width={width}
                height={height}
                fill={colors.gray.normal}
            />
        </AvatarIcon>
    </Avatar>
)

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${colors.gray.background};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: 10px;
  z-index: 1;
  position: relative;
  overflow: hidden;
`

const AvatarIcon = styled.div`
  position: absolute;
  bottom: -15px;
`
