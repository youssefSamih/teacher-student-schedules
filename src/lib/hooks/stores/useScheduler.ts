import { useStore } from 'outstated'
import { useSchedulerStore } from 'lib/stores'

export const useScheduler = () => useStore(useSchedulerStore)
