import { useEffect } from 'react'
import { Nullable } from 'lib/types'

type Exception = Nullable<Element | undefined>

// exceptions are for elements you want NOT to trigger callback with
export const useWindowClick = (callback: VoidFunction, exceptions?: Array<Exception>) => {
    useEffect(() => {
        const fn = (event: PointerEvent) => {
            // path does exist on type pointerEvent, but in some case type doesn't have it
            // @ts-ignore
            if (exceptions && exceptions.find(element => event.path.includes(element))) {
                return
            }

            callback()
        }

        window.addEventListener('click', fn)

        return () => {
            window.removeEventListener('click', fn)
        }
    }, [callback, exceptions])
}
