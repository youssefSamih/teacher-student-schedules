import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Icons } from 'assets'
import { constants } from 'common'
import { colors } from '../styles'

type LoaderProps = {
    size?: number,
    color?: string
}

export const WhiteLoader: React.FunctionComponent = () => (
    <WhiteLoaderWrapper>
        <WhiteContainer>
            <Loader/>
        </WhiteContainer>
    </WhiteLoaderWrapper>
)

export const FullLoader: React.FunctionComponent = () => (
    <LoaderWrapper>
        <Loader/>
    </LoaderWrapper>
)

export const Loader: React.FunctionComponent<LoaderProps> = ({
    size = 30,
    color = colors.primary
}) => (
    <Container>
        <Icons.Loader
            fill={color}
            width={size}
            height={size}
        />
    </Container>
)

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  animation: ${spin} infinite 1.7s linear;
  display: flex;
`

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`

const WhiteLoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
`

const WhiteContainer = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: ${constants.POPPER_HOVER_BOX_SHADOW};
`
