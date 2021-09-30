import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { Select } from './Select'
import { Tooltip } from './Tooltip'
import { Typography } from './Typography'
import { AppointmentType } from '../types'
import { useTranslations } from '../hooks'
import { useSchedulerLegend } from './scheduler'

type LabelStyles = {
    background?: string
}

export const AppointmentSelect: React.FunctionComponent = () => {
    const T = useTranslations()
    const options = useSchedulerLegend()
    // todo For now we have only 1:1 and Warmup, but warmup is computed by API
    const forcedSelection = options.find(item => item.variant === AppointmentType.OneOnOne)

    return (
        <Select
            disabled
            selected={[AppointmentType.OneOnOne]}
            rightIcon={(
                // todo until we implement additional products, this icon should be visible
                <Tooltip text={T.adminka.scheduler.appointmentModal.appointmentTypeInfo}>
                    <Icons.Information/>
                </Tooltip>
            )}
            label={T.common.appointmentType}
            options={options.map(item => ({
                value: item.variant,
                label: item.name
            }))}
            customValue={{
                renderValue: (
                    <Value>
                        <Label background={forcedSelection?.color}/>
                        <Typography>
                            {forcedSelection?.name}
                        </Typography>
                    </Value>
                ),
                renderSelect: (
                    <Value/>
                )
            }}
        />
    )
}

const Value = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.div<LabelStyles>`
  width: 15px;
  height: 15px;
  border-radius: 4px;
  background-color: ${({ background }) => background};
  margin-right: 20px;
`
