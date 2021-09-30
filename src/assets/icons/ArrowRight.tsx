import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const ArrowRight: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <path d="M27.534 70a2.532 2.532 0 01-1.872-4.235l23.384-25.764-23.384-25.764a2.533 2.533 0 113.751-3.405l24.931 27.466a2.523 2.523 0 010 3.405L29.41 69.17a2.546 2.546 0 01-1.876.83z"/>
    </Icon>
)
