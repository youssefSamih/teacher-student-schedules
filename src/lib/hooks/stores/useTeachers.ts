import { useStore } from 'outstated'
import { useTeachersStore } from 'lib/stores'

export const useTeachers = () => useStore(useTeachersStore)
