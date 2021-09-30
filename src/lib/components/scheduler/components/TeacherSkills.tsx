import React from 'react'
import styled from 'styled-components'
import { textUtils } from 'lib/utils'
import { useTranslations } from 'lib/hooks'
import { Select, Typography } from 'lib/components'
import { useTeacherSkills } from '../constants'

export const TeacherSkills: React.FunctionComponent = () => {
    const T = useTranslations()
    const skills = useTeacherSkills()

    return (
        <Container>
            <Select
                renderCustomRow={option => {
                    const { Icon } = skills.find(skill => skill.name === option.label) || {}

                    return (
                        <Row>
                            {Icon && (
                                <Icon
                                    width={26}
                                    height={26}
                                />
                            )}
                            <Label>
                                {textUtils.upperCaseFirstLetter(option.label)}
                            </Label>
                        </Row>
                    )
                }}
                label={T.adminka.scheduler.filters.teacherSkill}
                options={skills.map(item => ({
                    value: item.name,
                    label: item.name
                }))}
            />
        </Container>
    )
}

const Container = styled.div`
  margin-left: 16px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled(Typography)`
  margin-left: 5px;
`
