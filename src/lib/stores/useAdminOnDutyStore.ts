import { useState } from 'react'
import { Admin } from '../models'

type UseAdminOnDutyStoreState = {
    admins: Array<Admin>,
    currentAoD?: Admin
}

export const useAdminOnDutyStore = () => {
    const [ adminOnDutyState, setAdminOnDutyState ] = useState<UseAdminOnDutyStoreState>({
        admins: []
    })

    return {
        adminOnDutyState,
        setAdminOnDutyState: (state: Partial<UseAdminOnDutyStoreState>) => setAdminOnDutyState(prevState => ({
            ...prevState,
            ...state
        }))
    }
}
