import React from 'react'
import styled from 'styled-components'
import { constants } from 'common'
import { Button } from './Button'
import { colors } from '../styles'
import { Typography } from './Typography'
import { useTranslations } from '../hooks'

type ErrorComponentProps = {
    text: string,
    retry: VoidFunction
}

export const ErrorComponent: React.FunctionComponent<ErrorComponentProps> = ({
    text,
    retry
}) => {
    const T = useTranslations()

    return (
        <ErrorWrapper>
            <Background>
                <Text>
                    {text}
                </Text>
                <Button
                    extraSpacing
                    onClick={retry}
                    textColor={colors.white}
                    backgroundColor={colors.warmup}
                >
                    {T.common.retry}
                </Button>
            </Background>
        </ErrorWrapper>
    )
}

const ErrorWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`

const Text = styled(Typography)`
  margin-bottom: 40px;
`

const Background = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: ${constants.POPPER_HOVER_BOX_SHADOW};
`
