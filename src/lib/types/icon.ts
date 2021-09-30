import { MouseEventHandler } from 'react'

export type SvgIcon = {
    fill?: string,
    width?: number,
    height?: number,
    viewBox?: string,
    onClick?: MouseEventHandler,
    pointer?: boolean
}
