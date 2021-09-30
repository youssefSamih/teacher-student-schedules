import React from 'react'
import styled from 'styled-components'
import { SchedulerCore } from 'lib/components'
import { useInitializeScheduler } from './hooks'

export const Scheduler: React.FunctionComponent = () => {
    const { hasError, isLoading, retry } = useInitializeScheduler()

    return (
        <Container>
            <SchedulerCore
                retry={retry}
                error={hasError}
                isLoading={isLoading}
            />
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`
