import React, { useState } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { useTranslations } from 'lib/hooks'
import { OutlinedInput, Switch, Typography } from 'lib/components'
import { TeacherDropDown, TeacherSkills } from './components'

type SchedulerFiltersState = {
    areUnavailableTeachersHidden: boolean,
    studentQuery: string,
    selectedTeacher: Array<number>,
    selectedSkills: Array<number>
}

export const SchedulerFilters: React.FunctionComponent = () => {
    const T = useTranslations()
    const [ filters, setFilters ] = useState<SchedulerFiltersState>({
        areUnavailableTeachersHidden: true,
        studentQuery: '',
        selectedTeacher: [],
        selectedSkills: []
    })
    const switchLabel = filters.areUnavailableTeachersHidden
        ? T.adminka.scheduler.filters.hidden
        : T.adminka.scheduler.filters.visible

    return (
        <Container>
            <OutlinedInput
                rightIcon={<Icons.Search/>}
                label={T.adminka.scheduler.filters.searchStudent}
            />
            <TeacherSelectWrapper>
                <TeacherDropDown/>
            </TeacherSelectWrapper>
            <TeacherSkills/>
            <CustomSwitch>
                <TopLabel>
                    {T.adminka.scheduler.filters.hide}
                </TopLabel>
                <SwitchWithLabel>
                    <Switch
                        toggled={filters.areUnavailableTeachersHidden}
                        onClick={() => setFilters(prevState => ({
                            ...prevState,
                            unavailableTeachersHidden: !prevState.areUnavailableTeachersHidden
                        }))}
                    />
                    <SwitchLabel>
                        {switchLabel}
                    </SwitchLabel>
                </SwitchWithLabel>
            </CustomSwitch>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const TeacherSelectWrapper = styled.div`
  margin-left: 16px;
`

const CustomSwitch = styled.div`
  margin-left: 16px;
`

const TopLabel = styled(Typography)`
  font-size: 12px;
  font-weight: lighter;
  line-height: 15px;
  margin-bottom: 6px;
`

const SwitchWithLabel = styled.div`
  display: flex;
  align-items: center;
`

const SwitchLabel = styled(Typography)`
  margin-left: 6px;
  font-size: 12px;
  font-weight: lighter;
  line-height: 15px;
`
