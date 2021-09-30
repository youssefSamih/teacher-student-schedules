import React from 'react'
import { toast } from 'react-toastify'
import { Toast } from 'lib/components'
import { Toastify } from '../types'

type UseToastProps = {
    text: string,
    type: Toastify
}

export const useToast = () => ({
    setToast: ({ text, type = Toastify.Default }: UseToastProps) => toast((
        <Toast
            text={text}
            isDefault={type === Toastify.Default}
        />
    ), {
        hideProgressBar: true,
        type,
        theme: 'colored'
    })
})
