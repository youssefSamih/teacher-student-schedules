import { useCallback, useEffect, useState } from 'react'

export const useWindowResize = () => {
    const [ width, setWidth ] = useState<number>(window.innerWidth)
    const [ height, setHeight ] = useState<number>(window.innerHeight)

    const onResize = useCallback(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }, [])

    useEffect(() => {
        onResize()

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return {
        width,
        height
    }
}
