import React, { useRef } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from 'lib/styles'
import { textUtils } from 'lib/utils'
import { Typography } from 'lib/components'
import { usePopper, useTranslations } from 'lib/hooks'
import { SchedulerSizes, useSchedulerLegend } from '../constants'

type ColorStyles = {
    color: string
}

export const Legend: React.FunctionComponent = () => {
    const T = useTranslations()
    const iconRef = useRef(null)
    const { popperActions: { setPopperState } } = usePopper()
    const variants = useSchedulerLegend()

    return (
        <Container
            onClick={() => setPopperState({
                bare: true,
                width: undefined,
                anchor: iconRef.current,
                triangleLeftPosition: undefined,
                actions: variants.map(variant => ({
                    name: (
                        <Action>
                            <Color color={variant.color}/>
                            {variant.name}
                        </Action>
                    )
                }))
            })}
        >
            <IconWrapper ref={iconRef}>
                <Icons.Information
                    width={18}
                    height={18}
                />
            </IconWrapper>
            <Text>
                {textUtils.upperCaseFirstLetter(T.adminka.scheduler.header.legend)}
            </Text>
        </Container>
    )
}

const Container = styled.div`
  width: 100px;
  border-right: 1px solid ${colors.table.dataCellBorder};
  border-bottom: 1px solid ${colors.table.dataCellBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  height: ${SchedulerSizes.ResourceHeight}px;
  z-index: 1000;
  left: 0;
  top: ${SchedulerSizes.Header}px;
`

const Text = styled(Typography)`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.gray.typography};
  margin-left: 5px;
`

const IconWrapper = styled.div`
  display: flex
`

const Color = styled.div<ColorStyles>`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  border-radius: 4px;
`

const Action = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${colors.table.background};
  padding-bottom: 16px;
`
