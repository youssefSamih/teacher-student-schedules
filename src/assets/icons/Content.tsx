import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const Content: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <path d="M54 70H26a8.009 8.009 0 01-8-8V22a8.009 8.009 0 018-8h4v4h-4a4 4 0 00-4 4v40a4 4 0 004 4h28a4 4 0 004-4V22a4 4 0 00-4-4h-4v-4h4a8.009 8.009 0 018 8v40a8.009 8.009 0 01-8 8z"/>
        <path d="M46.734 22H33.266A5.272 5.272 0 0128 16.734v-1.468A5.272 5.272 0 0133.266 10h13.467a5.272 5.272 0 015.266 5.266v1.468A5.272 5.272 0 0146.734 22zm-13.467-8a1.268 1.268 0 00-1.266 1.266v1.468A1.268 1.268 0 0033.267 18h13.467A1.268 1.268 0 0048 16.734v-1.468A1.268 1.268 0 0046.734 14z"/>
    </Icon>
)
