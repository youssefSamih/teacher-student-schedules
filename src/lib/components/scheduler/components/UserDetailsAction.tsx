import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from 'lib/types'
import { VariantType } from '../types'

type IconWrapperProps = {
    iconMarginLeft?: number
}

type UserDetailsActionProps = IconWrapperProps & {
    variant?: VariantType,
    Icon: React.FunctionComponent<SvgIcon>,
    textDetails: string,
    iconSize?: number
}

export const UserDetailsAction: React.FunctionComponent<UserDetailsActionProps> = ({
    variant,
    textDetails,
    iconMarginLeft = 0,
    iconSize = 20,
    Icon
}) => (
    <DetailsContainer>
        <IconWrapper iconMarginLeft={iconMarginLeft}>
            <Icon
                fill={variant?.color}
                width={iconSize}
                height={iconSize}
            />
        </IconWrapper>
        <TextDetailsAction>
            {textDetails}
        </TextDetailsAction>
    </DetailsContainer>
)

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`

const TextDetailsAction = styled.div`
  line-height: 17px;
  font-size: 14px;
`

const IconWrapper = styled.div<IconWrapperProps>`
  margin-right: 12px;
  margin-left: ${({ iconMarginLeft }) => iconMarginLeft}px;
`
