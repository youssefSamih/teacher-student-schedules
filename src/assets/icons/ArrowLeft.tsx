import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const ArrowLeft: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <path d="M52.472 10a2.532 2.532 0 011.872 4.235L30.96 39.999l23.384 25.764a2.533 2.533 0 11-3.751 3.405L25.662 41.702a2.523 2.523 0 010-3.405L50.596 10.83a2.546 2.546 0 011.876-.83z"/>
    </Icon>
)
