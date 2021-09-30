import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { addDays, parseISO } from 'date-fns'
import { Icons } from 'assets'
import { DateFormats, constants } from 'common'
import { colors } from 'lib/styles'
import { globalActions } from 'lib/actions'
import type { Timezone } from 'lib/types'
import { dateHelpers } from 'lib/utils'
import { Typography, Select, Button, DatePicker, Tooltip } from 'lib/components'
import { useDatePicker, useScheduler, useTranslations, useUser } from 'lib/hooks'
import { SchedulerClasses, SchedulerSizes } from '../constants'

export const Header: React.FunctionComponent = () => {
    const T = useTranslations()
    const { user } = useUser()
    const [ timezones, setTimezone ] = useState<Array<Timezone>>([])
    const [ selectedTimezone, setSelectedTimezone ] = useState<string>(constants.DEFAULT_TIMEZONE_VALUE)
    const { fetch: getTimezones } = globalActions.useGetTimezone(timezones => {
        const defaultTimezone = timezones.find(timezoneObject => timezoneObject.timezone === selectedTimezone)

        if (defaultTimezone) {
            const sortedTimezone = [defaultTimezone, ...timezones.filter(timezone => timezone.timezone !== selectedTimezone)]

            setTimezone(sortedTimezone)
        }
    })
    const { pickerRef, setDateState: { setDate } } = useDatePicker()
    // dev-extreme has unique classNames also dx doesn't provide prop to override header
    const header = document.getElementsByClassName(SchedulerClasses.Header).item(0)
    const { setSchedulerState, schedulerState: { date, backlogOpen, ready }, schedulerActions } = useScheduler()
    const dayName = dateHelpers.formatDate({
        date,
        dateFormat: DateFormats.LongDayName
    })
    const monthName = dateHelpers.formatDate({
        date,
        dateFormat: `${DateFormats.ShortMonth} ${DateFormats.LongDay}`
    })

    useEffect(() => {
        if (user?.timezone) {
            setSelectedTimezone(user.timezone)
            getTimezones()
        }
    }, [user?.timezone])

    const body = (
        <Container>
            <DatePicker
                onChange={dates => {
                    const [ date ] = dates

                    if (date) {
                        schedulerActions.setCurrentDate(date)
                        setSchedulerState({
                            date: date?.toISOString()
                        })
                    }
                }}
            />
            <LeftSide>
                <Day
                    onClick={event => {
                        pickerRef.current?.flatpickr.open(undefined, event.currentTarget)
                    }}
                >
                    <DayName>
                        {`${dayName},\n${monthName}`}
                    </DayName>
                    <Icons.ArrowDown width={18}/>
                </Day>
                <Select
                    width={350}
                    withoutClear
                    renderCustomRow={option => (
                        <Tooltip text={option.offset}>
                            {option.label}
                        </Tooltip>
                    )}
                    selected={[selectedTimezone]}
                    label={T.adminka.header.timezone}
                    onChange={([ timezone ]) => setSelectedTimezone(timezone.value as string)}
                    options={timezones.map(item => ({
                        label: item.timezone,
                        value: item.timezone,
                        offset: item.offset
                    }))}
                />
            </LeftSide>
            <MiddleSide>
                <Button
                    Icon={Icons.ArrowLeft}
                    onClick={() => {
                        const newDate = addDays(parseISO(date), -1)

                        setDate(newDate)
                        schedulerActions.setCurrentDate(newDate)
                        setSchedulerState({
                            date: newDate.toISOString()
                        })
                    }}
                />
                <RightButton>
                    <Button
                        Icon={Icons.ArrowRight}
                        onClick={() => {
                            const newDate = addDays(parseISO(date), 1)

                            setDate(newDate)
                            schedulerActions.setCurrentDate(newDate)
                            setSchedulerState({
                                date: newDate.toISOString()
                            })
                        }}
                    />
                </RightButton>
                <Button
                    LeftIcon={Icons.Plus}
                    onClick={() => setSchedulerState({
                        appointmentModal: {
                            add: true
                        }
                    })}
                >
                    {T.adminka.scheduler.header.addAppointment}
                </Button>
            </MiddleSide>
            <RightSide>
                {backlogOpen && (
                    <Button
                        LeftIcon={Icons.EyeOff}
                        onClick={() => setSchedulerState({
                            backlogOpen: false
                        })}
                    >
                        {T.adminka.scheduler.header.hideBacklog}
                    </Button>
                )}
                {!backlogOpen && (
                    <Button
                        LeftIcon={Icons.Eye}
                        onClick={() => setSchedulerState({
                            backlogOpen: true
                        })}
                    >
                        {T.adminka.scheduler.header.showBacklog}
                    </Button>
                )}
            </RightSide>
        </Container>
    )

    return ready && header
        ? ReactDOM.createPortal(body, header)
        : null
}

const Container = styled.div`
  padding: 16px 20px;
  height: ${SchedulerSizes.Header}px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border-bottom: 2px solid ${colors.gray.border};
  width: 100%;
`

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${colors.gray.border};
  padding-right: 20px;
  margin-right: 20px;
`

const Day = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
  min-width: 150px;
  justify-content: space-between;
`

const DayName = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  white-space: pre-line;
  margin-right: 10px;
  line-height: 20px;
`

const MiddleSide = styled.div`
  display: flex;
  align-items: center;
`

const RightSide = styled.div`
  margin-left: auto;
`

const RightButton = styled.div`
  margin-left: 12px;
  border-right: 1px solid ${colors.gray.border};
  padding-right: 20px;
  margin-right: 20px;
`
