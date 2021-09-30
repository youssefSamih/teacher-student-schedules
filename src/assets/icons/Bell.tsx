import React from 'react'
import { SvgIcon } from 'lib/types'
import { Icon } from 'lib/components'

export const Bell: React.FunctionComponent<SvgIcon> = props => (
    <Icon {...props}>
        <path d="M39.736 70a10.726 10.726 0 01-10.714-10.714h-9.963a5.006 5.006 0 01-4.6-2.822 4.71 4.71 0 01.623-5.039c.222-.272.441-.536.654-.794 2.95-3.564 4.73-5.715 4.736-15.808 0-9.159 3.67-15.123 11.22-18.232a.388.388 0 00.108-.087c1.153-3.89 4.335-6.5 7.933-6.5s6.772 2.609 7.939 6.5a.4.4 0 00.11.093 17.482 17.482 0 017.507 5.51c2.463 3.222 3.712 7.5 3.712 12.723 0 10.093 1.78 12.244 4.73 15.808.214.258.432.522.654.794a4.713 4.713 0 01.617 5.043 4.989 4.989 0 01-4.579 2.817h-9.976A10.726 10.726 0 0139.736 70zm-6.429-10.714a6.429 6.429 0 1012.857 0zm15-4.286h12.119a.707.707 0 00.707-.369.433.433 0 00-.065-.495 122.26 122.26 0 00-.636-.772c-3.192-3.857-5.714-6.9-5.714-18.54 0-4.258-.953-7.663-2.831-10.12a13.159 13.159 0 00-5.735-4.15 4.493 4.493 0 01-2.571-2.785c-.708-2.407-2.441-3.482-3.845-3.482s-3.138 1.074-3.835 3.474a4.486 4.486 0 01-2.576 2.794 13.167 13.167 0 00-5.736 4.147c-1.877 2.455-2.829 5.86-2.829 10.123-.007 11.636-2.528 14.683-5.72 18.54-.208.251-.421.508-.637.773a.432.432 0 00-.069.49.724.724 0 00.725.373z"/>
    </Icon>
)