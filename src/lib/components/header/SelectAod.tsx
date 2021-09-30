import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { Toastify } from 'lib/types'
import { globalActions } from 'lib/actions'
import { Select, ConfirmationDialog } from 'lib/components'
import { useAdminOnDuty, useToast, useTranslations } from 'lib/hooks'

export const SelectAod: React.FunctionComponent = () => {
    const T = useTranslations()
    const { setToast } = useToast()
    const [ selectedAoD, setSelectedAoD ] = useState<string>()
    const { adminOnDutyState: { admins, currentAoD }, setAdminOnDutyState } = useAdminOnDuty()
    const selectedAdmin = admins.find(admin => admin.userUid === selectedAoD)
    const { fetch: changeCurrentAoD, fetchState: { isLoading } } = globalActions.useChangeCurrentAoD(() => {
        setToast({
            text: T.adminka.header.successChangeAoD,
            type: Toastify.Success
        })
        setSelectedAoD(undefined)
        setAdminOnDutyState({
            currentAoD: selectedAdmin
        })
    })

    return (
        <Container>
            <Select
                // todo change condition to fetch state
                isFetching={admins.length === 0}
                label={T.adminka.header.adminOnDuty}
                selected={currentAoD ? [currentAoD.userUid] : []}
                options={admins.map(admin => ({
                    value: admin.userUid,
                    label: `${admin.firstName} ${admin.lastName}`,
                    disabled: admin.userUid === currentAoD?.userUid
                }))}
                onChange={([ option ]) => setSelectedAoD(option.value as string)}
            />
            {selectedAoD && (
                <ConfirmationDialog
                    isLoading={isLoading}
                    title={T.adminka.header.adminOnDuty}
                    onReject={() => setSelectedAoD(undefined)}
                    question={(
                        <Question>
                            {T.adminka.header.changeAoDQuestion}
                            <SelectedAdmin>
                                {selectedAdmin?.firstName} {selectedAdmin?.lastName}
                            </SelectedAdmin>
                        </Question>
                    )}
                    onAccept={() => changeCurrentAoD({
                        userUid: selectedAoD
                    })}
                />
            )}
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${colors.gray.border};
`

const Question = styled.div`
  display: flex;
  align-items: center;
`

const SelectedAdmin = styled.span`
  margin-left: 10px;
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bolder;
`
