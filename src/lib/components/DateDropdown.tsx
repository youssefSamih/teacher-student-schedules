import React from 'react'
import { Select } from './Select'
import { dateHelpers } from '../utils'
import { useTranslations } from '../hooks'

export const DateDropdown: React.FunctionComponent = () => {
    const T = useTranslations()
    const options = dateHelpers.getDayTimeAvailabilities()

    return (
        <Select
            label={T.common.dateFrom}
            options={options.map(item => ({
                value: item.toISOString(),
                label: dateHelpers.toAppointmentTime(item).toString()
            }))}
        />
    )
}
