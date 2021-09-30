import { useState } from 'react'
import { Teacher } from '../models'

export const useTeachersStore = () => {
    const [ teachers, setTeachers ] = useState<Array<Teacher>>([])

    return {
        setTeachers,
        teachers
    }
}
