import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from 'lib/styles'
import { useTranslations } from 'lib/hooks'
import { OutlinedInput } from 'lib/components'

type SearchUnassignedProps = {
    onCancelClick?: VoidFunction
}

export const SearchUnassigned: React.FunctionComponent<SearchUnassignedProps> = ({ onCancelClick }) => {
    const T = useTranslations()

    return (
        <Fragment>
            <InputContainer>
                <OutlinedInput
                    leftIcon={<Icons.Search/>}
                    onChange={() => {}}
                />
            </InputContainer>
            <CancelButton onClick={onCancelClick}>
                {T.common.cancel}
            </CancelButton>
        </Fragment>
    )
}

const InputContainer = styled.div`
  flex: 1;
  input {
    border-radius: 30px;
  }
`

const CancelButton = styled.div`
  color: ${colors.typography};
  cursor: pointer;
  margin-left: 8px;
`
