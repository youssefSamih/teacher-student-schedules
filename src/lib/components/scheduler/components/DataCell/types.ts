type GroupsType = {
    teacherId: number
}

export type SchedulerType = {
    allDay?: boolean,
    endDate: Date,
    groupIndex: number,
    groups: GroupsType,
    startDate: Date
}
