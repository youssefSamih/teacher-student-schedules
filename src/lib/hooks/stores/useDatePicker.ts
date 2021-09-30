import { useStore } from 'outstated'
import { useDatePickerStore } from 'lib/stores'

export const useDatePicker = () => useStore(useDatePickerStore)
