import React from 'react'
import styled from 'styled-components'

export const Error: React.FunctionComponent = () => (
    // this component will be rendered where outstated and hooks doesn't work, it must be hardcoded
    <Container>
        an error occurred
    </Container>
)

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
