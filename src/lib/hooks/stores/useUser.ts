import { useStore } from 'outstated'
import { useUserStore } from 'lib/stores'

export const useUser = () => useStore(useUserStore)
