import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

type LinkProps = {
    link: string
}

export const Link: React.FunctionComponent<LinkProps> = ({
    children,
    link
}) => (
    <LinkWrapper
        href={link}
        target="_blank"
    >
        {children}
    </LinkWrapper>
)

const LinkWrapper = styled.a`
  outline: none;
  text-decoration: none;
  color: ${colors.typography} !important;
`
