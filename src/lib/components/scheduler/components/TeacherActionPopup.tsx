import React from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from 'lib/styles'
import { useTranslations } from 'lib/hooks'
import { TeacherResource } from 'lib/types'
import { TeacherDetailsAction } from './TeacherDetailsAction'

type TeacherActionPopupProps = {
    teacher: TeacherResource,
    hasTeacherSkills?: boolean,
    hasContactDetails?: boolean
}

type ActionBodyProps = {
    marginAtBottom?: boolean
}

export const TeacherActionPopup: React.FunctionComponent<TeacherActionPopupProps> = ({
    teacher,
    hasContactDetails,
    hasTeacherSkills
}) => {
    const T = useTranslations()

    return (
        <Action>
            {hasContactDetails && (
                <ActionBody marginAtBottom>
                    <LabelAction>
                        {T.adminka.scheduler.appointment.contactDetails}
                    </LabelAction>
                    {teacher.email && (
                        <TeacherDetailsAction
                            Icons={Icons.Email}
                            textDetails={teacher.email}
                        />
                    )}
                </ActionBody>
            )}
            {hasTeacherSkills && (
                <ActionBody>
                    <LabelAction>
                        {T.adminka.scheduler.resource.teacherSkills}
                    </LabelAction>
                    {teacher.skills?.warmup && (
                        <TeacherDetailsAction
                            Icons={Icons.Warmup}
                            fill={colors.red}
                            textDetails={T.adminka.scheduler.variants.warmup}
                        />
                    )}
                    {teacher.skills?.oneVsOne && (
                        <TeacherDetailsAction
                            Icons={Icons.OneToOne}
                            fill={colors.primary}
                            textDetails={T.adminka.scheduler.variants.oneVsOne}
                        />
                    )}
                    {teacher.skills?.vip && (
                        <TeacherDetailsAction
                            Icons={Icons.Vip}
                            fill={colors.yellow}
                            textDetails={T.adminka.scheduler.variants.vip}
                        />
                    )}
                </ActionBody>
            )}
        </Action>
    )
}

const Action = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`

const ActionBody = styled.div<ActionBodyProps>`
  ${({ marginAtBottom }) => marginAtBottom ? 'margin-bottom: 10px;' : ''}
`

const LabelAction = styled.h6`
  margin: 0 0 10px 0;
  color: ${colors.gray.typography};
`
