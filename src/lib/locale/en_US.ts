import { Dictionary } from 'lib/types'

export const en_US: Dictionary = {
    common: {
        joinRoom: 'join room',
        cancel: 'cancel',
        dateTo: 'date to',
        dateFrom: 'date from',
        search: 'search',
        noData: 'no data',
        send: 'send',
        apiError: 'An error occurred, please try again later.',
        adminOnDuty: 'Admin on duty:\n',
        retry: 'Try again',
        message: 'message',
        saveChanges: 'save changes',
        selected: 'selected',
        selectTeacherLabel: 'Select teachers',
        searchTeacherLabel: 'Search teacher',
        appointmentType: 'appointment type',
        all: 'all'
    },
    error: {
        fetchError: 'There was an error during fetching data, please try again'
    },
    adminka: {
        header: {
            account: 'account settings',
            logout: 'logout',
            notifications: 'notifications',
            scheduler: 'scheduler',
            timezone: 'timezone',
            adminOnDuty: 'admin on duty',
            changeAoD: 'change admin on duty',
            successChangeAoD: 'successfully changed admin on duty',
            changeAoDQuestion: 'Are you sure that you want to change admin on duty to:',
            change: 'change',
            searchStudentTeacher: 'Search teacher / student',
            tier: 'Tier'
        },
        scheduler: {
            header: {
                date: 'date',
                addAppointment: 'add appointment',
                hideBacklog: 'hide backlog',
                showBacklog: 'show backlog',
                legend: 'legend'
            },
            resource: {
                teacherSkills: 'Teacher skills”:'
            },
            unassignedAppointments: {
                title: 'unassigned appointments',
                thereIs: 'There is',
                thereAre: 'There are',
                unassignedAppointmentsStart: 'unassigned appointments that starts in less than',
                hours: 'hours'
            },
            appointment: {
                contactDetails: 'Contact details:',
                joinRoom: 'Join room'
            },
            variants: {
                warmup: 'warmup',
                vip: 'vip',
                oneVsOne: '1:1'
            },
            appointmentModal: {
                addAppointment: 'add appointment',
                editAppointment: 'edit appointment',
                addAppointmentSubTitle: 'add appointment subtitle',
                repeatBooking: 'repeat booking',
                requestAvailability: 'request availability',
                searchStudent: 'search student',
                subtitleInfo: 'Times teacher has met:',
                appointmentTypeInfo: 'System will detect automatically if this meeting is a warmup'
            },
            requestAvailability: {
                request: 'request availability'
            },
            cell: {
                clickToAdd: 'Click to add appointment'
            },
            filters: {
                searchStudent: 'search student',
                teacherSkill: 'teacher skill',
                hidden: 'hidden',
                hide: 'Hide unavailable teachers',
                visible: 'visible'
            },
            teacherSkills: {
                tier1: 'tier 1',
                tier2: 'tier 2',
                tier3: 'tier 3',
                tier4: 'tier 4',
                pic: 'person in charge',
                oneOnOne: '1:1',
                vip: 'VIP',
                warmup: 'warmup'
            }
        }
    }
}
