import { useStore } from 'outstated'
import { useAdminOnDutyStore } from 'lib/stores'

export const useAdminOnDuty = () => useStore(useAdminOnDutyStore)
