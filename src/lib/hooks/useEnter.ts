import { useEffect } from 'react'

export const useEnter = (callback: VoidFunction) => {
    useEffect(() => {
        const onEnter = ({ key }: KeyboardEvent) => {
            if (key === 'Enter') {
                callback()
            }
        }

        document.addEventListener('keydown', onEnter)

        return () => {
            document.removeEventListener('keydown', onEnter)
        }
    }, [callback])
}
