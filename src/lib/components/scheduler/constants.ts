import { Icons } from 'assets'
import { colors } from 'lib/styles'
import { useTranslations } from 'lib/hooks'
import { AppointmentType } from 'lib/types'

export enum SchedulerSizes {
    Header = 80,
    SideModal = 400,
    CellWidth = 250,
    ResourceHeight = 61
}

export enum SchedulerClasses {
    Header = 'dx-scheduler-header',
    WorkSpace = 'dx-scheduler-work-space',
    AllDayTitle = 'dx-scheduler-all-day-title',
    Navigator = 'dx-scheduler-navigator',
    ViewSwitcher = 'dx-scheduler-view-switcher',
    HeaderPanel = 'dx-scheduler-header-panel',
    TimeIndicator = 'dx-scheduler-date-time-indicator',
    SchedulerGroupRow = 'dx-scheduler-group-row',
    HeaderGroupContent = 'dx-scheduler-group-header-content',
    AppointmentContent = 'dx-scheduler-appointment-content',
    Appointment = 'dx-scheduler-appointment',
    Table = 'dx-scheduler-date-table',
    CellHorizontal = 'dx-scheduler-cell-sizes-horizontal',
    HeaderGroup = 'dx-scheduler-group-header',
    TimePanelCell = 'dx-scheduler-time-panel-cell',
    TableCell = 'dx-scheduler-date-table-cell',
    TableRow = 'dx-scheduler-date-table-row',
    TableSideBarScrollable = 'dx-scheduler-sidebar-scrollable',
    HeaderScrollable = 'dx-scheduler-header-scrollable',
    StateHover = 'dx-state-hover'
}

export const useSchedulerLegend = () => {
    const T = useTranslations()

    return [
        {
            variant: AppointmentType.OneOnOne,
            name: T.adminka.scheduler.variants.oneVsOne,
            color: colors.oneVsOne
        },
        {
            variant: AppointmentType.WarmUp,
            name: T.adminka.scheduler.variants.warmup,
            color: colors.warmup
        }
    ]
}

export const useTeacherSkills = () => {
    const T = useTranslations()

    return [
        {
            name: T.common.all
        },
        {
            name: T.adminka.scheduler.teacherSkills.pic,
            Icon: Icons.Pic
        },
        {
            name: T.adminka.scheduler.teacherSkills.vip,
            Icon: Icons.Vip
        },
        {
            name: T.adminka.scheduler.teacherSkills.oneOnOne,
            Icon: Icons.OneToOne
        },
        {
            name: T.adminka.scheduler.teacherSkills.warmup,
            Icon: Icons.Warmup
        },
        {
            name: T.adminka.scheduler.teacherSkills.tier1,
            Icon: Icons.Tier1
        },
        {
            name: T.adminka.scheduler.teacherSkills.tier2,
            Icon: Icons.Tier2
        },
        {
            name: T.adminka.scheduler.teacherSkills.tier3,
            Icon: Icons.Tier3
        },
        {
            name: T.adminka.scheduler.teacherSkills.tier4,
            Icon: Icons.Tier4
        }
    ]
}
