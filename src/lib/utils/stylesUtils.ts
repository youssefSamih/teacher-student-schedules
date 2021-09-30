import { TypeOptions } from 'react-toastify'
import { colors } from 'lib/styles'

export const getToastColor = (type: TypeOptions) => {
    switch (type) {
        case 'info':
            return colors.primary
        case 'error':
            return colors.red
        case 'success':
            return colors.success
        case 'warning':
            return colors.yellow
        case 'default':
        default:
            return colors.white
    }
}
