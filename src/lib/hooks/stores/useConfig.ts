import { useStore } from 'outstated'
import { useConfigStore } from 'lib/stores'

export const useConfig = () => useStore(useConfigStore)
