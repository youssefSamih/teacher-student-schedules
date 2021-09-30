import { useCallback, useEffect, useRef, useState } from 'react'

export const useResize = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [ width, setWidth ] = useState<number>(window.innerWidth)
    const [ height, setHeight ] = useState<number>(window.innerHeight)
    const [ itemWidth, setItemWidth ] = useState<number>(ref.current?.clientWidth || 0)
    const [ itemHeight, setItemHeight ] = useState<number>(ref.current?.clientHeight || 0)

    const onResize = useCallback(() => {
        const item = ref.current

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        if (item) {
            setItemWidth(item.clientWidth)
            setItemHeight(item.clientHeight)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        onResize()

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (ref.current) {
            setItemWidth(ref.current.clientWidth)
            setItemHeight(ref.current.clientHeight)
        }

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }, [])

    return {
        window: {
            width,
            height
        },
        item: {
            height: itemHeight,
            width: itemWidth
        },
        refresh: onResize,
        ref
    }
}
