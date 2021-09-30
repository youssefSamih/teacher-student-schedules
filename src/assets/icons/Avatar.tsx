import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const Avatar: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <defs>
            <clipPath id="a">
                <path d="M0 0h80v80H0z"/>
            </clipPath>
        </defs>
        <g clipPath="url(#a)" data-name="iPhone 12, 12 Pro – 1">
            <g data-name="Group 753" transform="translate(-149.36 -119)">
                <ellipse cx="15.356" cy="16.379" rx="15.356" ry="16.379" transform="translate(173.955 132)"/>
                <path d="M218.26 185.233h-57.9a23.765 23.765 0 0110.3-13.172 34.689 34.689 0 0118.646-5.259 34.721 34.721 0 0118.654 5.259 23.793 23.793 0 0110.3 13.17z"/>
            </g>
        </g>
    </Icon>
)
