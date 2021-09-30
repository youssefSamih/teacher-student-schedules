import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from 'lib/styles'
import type { Option } from 'lib/types'
import { Select, Typography } from 'lib/components'
import { useAdminOnDuty, useTranslations } from 'lib/hooks'

type TeacherDropDownProps = {
    withBottomMargin?: boolean
}

type AvatarWrapperProps = {
    marginRight: number
}

export const TeacherDropDown: React.FunctionComponent<TeacherDropDownProps> = ({ withBottomMargin }) => {
    const { adminOnDutyState: { admins } } = useAdminOnDuty()
    const T = useTranslations()
    const options = admins.map(admin => ({
        label: `${admin.firstName} ${admin.lastName}`,
        value: admin.userUid
    }))
    const [selectedTeacher, setSelectedTeacher] = useState<Array<string>>([])

    useEffect(() => {
        if (admins.length > 0) {
            const defaultSelected = options.map(option => option.value).slice(0, 3)

            setSelectedTeacher(defaultSelected)
        }
    }, [admins])

    const renderSelect = (
        <Fragment>
            {selectedTeacher.slice(0, 3).map((selectedOption, i) => (
                <AvatarWrapper
                    key={selectedOption}
                    marginRight={-10}
                >
                    <Icons.Avatar fill={colors.gray.typography} />
                </AvatarWrapper>
            ))}
            {selectedTeacher.length > 3 && (
                <AvatarWrapper marginRight={-10}>
                    {`+${selectedTeacher.length - 3}`}
                </AvatarWrapper>
            )}
        </Fragment>
    )

    const renderValue = (
        <TextInput>
            {selectedTeacher.length} {T.common.selected}
        </TextInput>
    )

    const customValue = selectedTeacher.length > 0 ? {
        renderSelect,
        renderValue
    } : undefined

    const onChange = ([option]: Array<Option>) => {
        const isExist = selectedTeacher.includes(option.value as string)

        if (isExist) {
            const filteredSelectedTeacherArray = selectedTeacher.filter(teacher => teacher !== option.value)

            return setSelectedTeacher(filteredSelectedTeacherArray)
        }

        const newSelectedTeacher = selectedTeacher.concat(option.value as string)

        return setSelectedTeacher(newSelectedTeacher)
    }

    return (
        <Container withBottomMargin={withBottomMargin}>
            <Select
                multiSelect
                withInternalSearch
                customValue={customValue}
                options={options}
                selected={selectedTeacher}
                label={T.common.selectTeacherLabel}
                internalSearchLabel={T.common.searchTeacherLabel}
                onChange={onChange}
                renderCustomRow={option => (
                    <RowContainer>
                        <AvatarWrapper marginRight={10}>
                            <Icons.Avatar fill={colors.gray.typography} />
                        </AvatarWrapper>
                        <UserNameLabelContainer>
                            <Text>
                                {option.label}
                            </Text>
                            <SkillsIconContainer>
                                <Icons.Warmup
                                    width={13}
                                    height={13}
                                />
                                <Icons.OneToOne
                                    width={15}
                                    height={15}
                                />
                                <VipWrapper>
                                    <Icons.Vip
                                        width={27}
                                        height={27}
                                    />
                                </VipWrapper>
                            </SkillsIconContainer>
                        </UserNameLabelContainer>
                    </RowContainer>
                )}
            />
        </Container>
    )
}

const Container = styled.div<TeacherDropDownProps>`
  position: relative;
  margin-bottom: ${props => props.withBottomMargin ? 16 : 0}px;
`

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  margin-right: ${({ marginRight }) => marginRight}px;
  width: 30px;
  height: 30px;
  background-color: ${colors.gray.iconBackground};
  border: 1px solid ${colors.white};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled(Typography)`
  font-size: 14px;
  line-height: 16px;
  color: ${colors.typography};
`

const TextInput = styled(Typography)`
  font-size: 14px;
  line-height: 16px;
  color: ${colors.typography};
  margin-left: 20px;
`

const SkillsIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -3px;
`

const VipWrapper = styled.div`
  margin: 0 0 -3px 0;
`

const UserNameLabelContainer = styled.div``
