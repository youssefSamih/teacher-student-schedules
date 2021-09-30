import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from 'lib/types'

type TeacherDetailsActionProps = {
    Icons: React.FunctionComponent<SvgIcon>,
    textDetails: string,
    fill?: string,
    iconWidth?: number,
    iconHeight?: number
}

export const TeacherDetailsAction: React.FunctionComponent<TeacherDetailsActionProps> = ({
    textDetails,
    iconWidth,
    iconHeight,
    Icons,
    fill
}) => (
    <DetailsContainer>
        <Icons
            width={iconWidth || 12}
            height={iconHeight || 12}
            fill={fill}
        />
        <TextDetailsAction>
            {textDetails}
        </TextDetailsAction>
    </DetailsContainer>
)

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TextDetailsAction = styled.p`
  margin: 0 0 0 10px;
  line-height: 17px;
  font-size: 14px;
`
