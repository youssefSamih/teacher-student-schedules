import { ru, ja, enUS } from 'date-fns/locale'
import { parseISO, isValid, format, startOfDay, addMinutes, addHours } from 'date-fns'
import { Languages } from 'lib/locale'
import { DateFnsDate, Timer } from 'lib/types'

type FormatDate = {
    date: DateFnsDate,
    dateFormat?: string,
    language?: Languages,
    withTimeZone?: boolean
}

type DateParams = {
    appointmentStartDate: Date,
    selectedDate: Date,
    hours: number
}

export const formatDate = ({
    date,
    dateFormat,
    language,
    withTimeZone
}: FormatDate) => {
    if (!date) {
        return ''
    }

    const { timeFormat, locale } = getLanguageTimeFormat(language)
    const parsedDate = typeof date === 'number'
        ? new Date(date)
        : typeof date === 'string'
            ? parseISO(date)
            : date

    if (!isValid(parsedDate)) {
        return date
    }

    const basicFormat = format(parsedDate, dateFormat || timeFormat, {
        locale
    })

    return withTimeZone
        ? basicFormat.concat(` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`)
        : basicFormat
}

export const toAppointmentTime = (date: DateFnsDate) => formatDate({
    date,
    dateFormat: 'hh:mm a'
})

export const getLanguageTimeFormat = (language?: Languages) => {
    switch (language) {
        case Languages.ja_JP:
            return {
                timeFormat: `yo MMM do HH:mm (OOOO)`,
                locale: ja
            }
        case Languages.ru_RU:
            return {
                timeFormat: `dd MMM yyyy HH:mm (OOOO)`,
                locale: ru
            }
        case Languages.en_US:
        default:
            return {
                timeFormat: `dd MMM yyyy HH:mm (OOOO)`,
                locale: enUS
            }
    }
}

export const getTimeFromMilliseconds = (time: number) => {
    if (time > 0) {
        const minutes = time / Timer.Minute
        const validMinutest = minutes < 1 ? 0 : Math.floor(minutes)
        const seconds = (time - (validMinutest * Timer.Minute)) / Timer.Second

        return `${validMinutest.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    return '00:00'
}

export const sortAscByDate = (date: number, nextDate: number) => nextDate - date

export const getDayTimeAvailabilities = () => {
    const startDay = startOfDay(new Date())

    return Array(24 * 2)
        .fill(undefined)
        .map((_, index) => addMinutes(startDay, 30 * index))
}

export const isDateLessOrEqual = ({
    appointmentStartDate,
    hours,
    selectedDate
}: DateParams) => {
    const startDate = new Date(selectedDate).getTime()
    const endDate = addHours(startDate, hours).getTime()
    const appointmentDate = appointmentStartDate.getTime()

    return startDate <= appointmentDate && appointmentDate <= endDate
}

export const isDateGreaterOrEqual = ({
    appointmentStartDate,
    hours,
    selectedDate
}: DateParams) => {
    const startDate = selectedDate.getTime()
    const endDate = addHours(startDate, hours).getTime()
    const appointmentDate = appointmentStartDate.getTime()

    return appointmentDate >= endDate
}
