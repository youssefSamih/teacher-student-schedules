import React from 'react'
import { colors } from 'lib/styles'
import { SvgIcon } from 'lib/types'

export const Icon: React.FunctionComponent<SvgIcon> = ({
    fill,
    width = 24,
    height = 24,
    children,
    viewBox,
    pointer,
    onClick
}) => (
    <svg
        role="svg"
        width={width}
        height={height}
        onClick={onClick}
        fill={fill || colors.typography}
        viewBox={viewBox || '0 0 80 80'}
        style={{
            cursor: (pointer || onClick) ? 'pointer' : undefined
        }}
    >
        {children}
    </svg>
)
