import React from 'react'
import 'flatpickr/dist/themes/material_blue.css'
import FlatPickr from 'react-flatpickr'
import styled from 'styled-components'
import { Icons } from 'assets'
import { useDatePicker, useTranslations } from 'lib/hooks'
import { colors } from '../styles'
import { OutlinedInput } from './outlinedInput'

type DatePickerProps = {
    withInput?: boolean,
    marginTop?: boolean,
    label?: string,
    controlledData?: string,
    onChange?(dates: Array<Date | undefined>): void
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
    withInput,
    onChange,
    marginTop,
    label,
    controlledData
}) => {
    const T = useTranslations()
    const { pickerRef, dateState: { date }, setDateState: { setDate } } = useDatePicker()
    const value = controlledData ?? date

    return (
        <Container
            withInput={withInput}
            marginTop={marginTop}
        >
            <FlatPickr
                value={value}
                ref={pickerRef}
                render={withInput ? (props, ref) => (
                    <OutlinedInput
                        ref={ref}
                        controlledValue={props.value?.toString()}
                        label={label || T.adminka.scheduler.header.date}
                        rightIcon={(
                            <Icons.Alarm
                                width={20}
                                height={20}
                                fill={colors.gray.typography}
                            />
                        )}
                        onChange={value => {
                            if (value === '' && onChange) {
                                onChange([])
                            }
                        }}
                    />
                ) : undefined}
                options={{
                    allowInput: false,
                    onChange: dates => {
                        const [ date ] = dates

                        if (onChange) {
                            return onChange(dates)
                        }

                        setDate(date)
                    }
                }}
            />
        </Container>
    )
}

const Container = styled.div<Partial<DatePickerProps>>`
  margin-top: ${props => props.marginTop ? 16 : 0}px;
  .flatpickr-input {
    display: ${props => props.withInput ? 'block' : 'none'};
  }
`
