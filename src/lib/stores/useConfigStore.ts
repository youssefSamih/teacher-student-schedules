import { useState } from 'react'
import { SideMenu } from '../types'

type UseConfigStoreState = {
    isLoading: boolean,
    sideMenu: SideMenu,
    collapsedTabs: Array<string>,
    mainTab: string
}

export const useConfigStore = () => {
    const [ state, setState ] = useState<UseConfigStoreState>({
        isLoading: true,
        sideMenu: SideMenu.Icons,
        collapsedTabs: [],
        mainTab: ''
    })

    return {
        state,
        setState: (state: Partial<UseConfigStoreState>) => setState(prevState => ({
            ...prevState,
            ...state
        }))
    }
}
