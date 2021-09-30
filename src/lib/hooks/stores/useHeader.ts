import { useStore } from 'outstated'
import { useHeaderStore } from 'lib/stores'

export const useHeader = () => useStore(useHeaderStore)
