import { useRef, useState } from 'react'
import FlatPickr from 'react-flatpickr'

export const useDatePickerStore = () => {
    const pickerRef = useRef<FlatPickr>(null)
    const [ date, setDate ] = useState<Date>(new Date())

    return {
        pickerRef,
        dateState: {
            date
        },
        setDateState: {
            setDate
        }
    }
}
