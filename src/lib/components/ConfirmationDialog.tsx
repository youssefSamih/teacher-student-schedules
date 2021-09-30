import React from 'react'
import { Dialog } from './Dialog'
import { colors } from '../styles'
import { useTranslations } from '../hooks'

type ConfirmationDialogProps = {
    onAccept: VoidFunction,
    onReject: VoidFunction,
    title: string,
    isLoading?: boolean,
    question: string | React.ReactNode
}

export const ConfirmationDialog: React.FunctionComponent<ConfirmationDialogProps> = ({
    onAccept,
    onReject,
    title,
    question,
    isLoading
}) => {
    const T = useTranslations()

    return (
        <Dialog
            title={title}
            onClose={onReject}
            isLoading={isLoading}
            actions={[
                {
                    name: T.common.cancel,
                    onClick: onReject,
                    disabled: isLoading
                },
                {
                    name: T.adminka.header.change,
                    onClick: onAccept,
                    backgroundColor: colors.primary,
                    color: colors.white
                }
            ]}
        >
            {question}
        </Dialog>
    )
}
