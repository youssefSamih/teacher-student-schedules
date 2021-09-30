import { colors } from 'lib/styles'
import { Dictionary } from 'lib/types'

export const tierData = (T: Dictionary<string>) => Array.from({ length: 4 }).map((_, i) => ({
    label: `${T.adminka.header.tier} ${i + 1}`,
    value: `${T.adminka.header.tier} ${i + 1}`
}))

export const appointmentType = (T: Dictionary<string>) => [
    {
        label: T.adminka.scheduler.variants.warmup,
        value: T.adminka.scheduler.variants.warmup,
        color: colors.warmup
    },
    {
        label: T.adminka.scheduler.variants.oneVsOne,
        value: T.adminka.scheduler.variants.oneVsOne,
        color: colors.oneVsOne
    }
]
