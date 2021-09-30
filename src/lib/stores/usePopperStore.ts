import { useState } from 'react'
import { Action, Nullable, PopperAnchor } from 'lib/types'

type UsePopperStore = {
    anchor?: Nullable<HTMLElement>,
    actions?: Array<Action>,
    width?: number,
    position?: PopperAnchor,
    parentAnchor?: Nullable<HTMLElement>,
    bare?: boolean,
    triangleLeftPosition?: number
}

export const usePopperState = () => {
    const [ popperState, setPopperState ] = useState<UsePopperStore>({})

    return {
        popperState,
        popperActions: {
            setPopperState: (state: Partial<UsePopperStore>) => setPopperState(prevState => ({
                ...prevState,
                ...state
            }))
        }
    }
}
