import React from 'react'

export type Action = {
    name: string | React.ReactNode,
    flag?: string,
    onClick?: VoidFunction,
    color?: string,
    backgroundColor?: string,
    isLoading?: boolean,
    disabled?: boolean
}
