import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const Check: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <path d="M40 70a30 30 0 1130-30 30.034 30.034 0 01-30 30zm0-55.384A25.385 25.385 0 1065.384 40 25.413 25.413 0 0040 14.615z" data-name="Path 69"/>
        <path d="M34.462 53.846a2.308 2.308 0 01-1.715-.764l-8.308-9.231a2.308 2.308 0 013.431-3.088l6.534 7.259 17.677-21.045a2.308 2.308 0 113.534 2.969L36.231 53.023a2.308 2.308 0 01-1.728.823z" data-name="Path 70"/>
    </Icon>
)
