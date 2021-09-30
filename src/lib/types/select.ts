import { ReactNode } from 'react'

export type Option = {
    value: number | string,
    label: string,
    color?: string,
    offset?: string,
    disabled?: boolean
}

export type OutlinedInputCustomValue = {
    renderValue: ReactNode,
    renderSelect: ReactNode
}
