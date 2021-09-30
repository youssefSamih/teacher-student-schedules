import { useState } from 'react'
import { User } from '../models'

export const useUserStore = () => {
    const [ user, setUser ] = useState<User>()

    return {
        user,
        setUser
    }
}
