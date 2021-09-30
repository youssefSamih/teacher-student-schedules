import { useEffect } from 'react'

export const useWindowScroll = (callback: VoidFunction) => {
    useEffect(() => {
        window.addEventListener('scroll', callback, true)

        return () => {
            window.removeEventListener('scroll', callback)
        }
    }, [callback])
}
