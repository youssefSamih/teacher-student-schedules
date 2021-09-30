import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type ClickAwayComponentProps = {
    onClickOutside: VoidFunction
}

export const ClickAwayComponent: React.FunctionComponent<ClickAwayComponentProps> = ({
    children,
    onClickOutside
}) => {
    const [ isMouseOutside, setIsMouseOutside ] = useState(false)

    useEffect(() => {
        const onClick = () => {
            if (isMouseOutside) {
                onClickOutside()
            }
        }

        window.addEventListener('click', onClick)

        return () => {
            window.removeEventListener('click', onClick)
        }
    }, [isMouseOutside])

    return (
        <Container
            onMouseLeave={() => setIsMouseOutside(true)}
            onMouseEnter={() => setIsMouseOutside(false)}
        >
            {children}
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`
