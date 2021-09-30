import { useStore } from 'outstated'
import { usePopperState } from 'lib/stores'

export const usePopper = () => useStore(usePopperState)
