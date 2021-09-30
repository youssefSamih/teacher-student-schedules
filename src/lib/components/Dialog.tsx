import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { Action } from '../types'
import { Button } from './Button'
import { textUtils } from '../utils'
import { Typography } from './Typography'
import { colors, stylesHelpers } from '../styles'

type DialogProps = {
    title: string,
    minWidth?: number,
    actions?: Array<Action>,
    customFooter?: React.ReactNode,
    subtitle?: React.ReactNode,
    isLoading?: boolean,
    onClose?(): void
}

type DialogStyles = {
    minWidth?: number
}

export const Dialog: React.FunctionComponent<DialogProps> = ({
    title,
    children,
    onClose,
    actions,
    minWidth,
    customFooter,
    subtitle,
    isLoading
}) => (
    <Container>
        <Wrapper minWidth={minWidth}>
            <Header>
                <TopHeader>
                    <Title>
                        {textUtils.upperCaseFirstLetter(title)}
                    </Title>
                    {onClose && (
                        <Icons.Close
                            width={18}
                            height={18}
                            onClick={() => !isLoading && onClose()}
                        />
                    )}
                </TopHeader>
                {subtitle}
            </Header>
            <Body>
                {children}
            </Body>
            {(actions || customFooter) && (
                <Footer>
                    {actions && actions.map((action, index) => (
                        <ButtonWrapper key={`${action.name}${index}`}>
                            <Button
                                onClick={action.onClick}
                                textColor={action.color}
                                disabled={action.disabled}
                                backgroundColor={action.backgroundColor}
                                isLoading={!action.disabled && isLoading}
                            >
                                {action.name}
                            </Button>
                        </ButtonWrapper>
                    ))}
                    {customFooter}
                </Footer>
            )}
        </Wrapper>
    </Container>
)

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${stylesHelpers.customBlackTransparent(0.6)};
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div<DialogStyles>`
  background-color: ${colors.white};
  border-radius: 18px;
  padding: 26px;
  min-width: ${props => props.minWidth || 500}px;
`

const Body = styled.div``

const Header = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.gray.border};
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const Title = styled(Typography)`
  font-size: 16px;
  line-height: 18px;
`

const Footer = styled.div`
  padding-top: 15px;
  border-top: 1px solid ${colors.gray.border};
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
  margin-left: 8px;
`
