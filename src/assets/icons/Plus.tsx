import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const Plus: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <path d="M38.255 68.394a2.655 2.655 0 01-.78-1.884V42.803l-23.707.001a2.664 2.664 0 010-5.327h23.708V13.769a2.664 2.664 0 115.327 0v23.708H66.51a2.664 2.664 0 110 5.327H42.803v23.708a2.664 2.664 0 01-4.548 1.884z"/>
    </Icon>
)
