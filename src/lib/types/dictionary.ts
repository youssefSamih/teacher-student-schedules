export type Dictionary<T = string> = {
    common: {
        dateFrom: T,
        dateTo: T,
        joinRoom: T,
        cancel: T,
        search: T,
        noData: T,
        send: T,
        apiError: T,
        adminOnDuty: T,
        message: T,
        saveChanges: T,
        retry: T,
        selected: T,
        selectTeacherLabel: T,
        searchTeacherLabel: T,
        appointmentType: T,
        all: T
    },
    error: {
        fetchError: T
    },
    adminka: {
        header: {
            account: T,
            notifications: T,
            scheduler: T,
            logout: T,
            timezone: T,
            adminOnDuty: T,
            changeAoD: T,
            successChangeAoD: T,
            changeAoDQuestion: T,
            change: T,
            searchStudentTeacher: T,
            tier: T
        },
        scheduler: {
            header: {
                date: T,
                addAppointment: T,
                hideBacklog: T,
                showBacklog: T,
                legend: T
            },
            resource: {
                teacherSkills: T
            },
            unassignedAppointments: {
                title: T,
                thereIs: T,
                thereAre: T,
                unassignedAppointmentsStart: T,
                hours: T
            },
            appointment: {
                contactDetails: T,
                joinRoom: T
            },
            variants: {
                warmup: T,
                vip: T,
                oneVsOne: T
            },
            appointmentModal: {
                requestAvailability: T,
                addAppointment: T,
                editAppointment: T,
                addAppointmentSubTitle: T,
                searchStudent: T,
                repeatBooking: T,
                subtitleInfo: T,
                appointmentTypeInfo: T
            },
            requestAvailability: {
                request: T
            },
            cell: {
                clickToAdd: T
            },
            filters: {
                searchStudent: T,
                teacherSkill: T,
                hide: T,
                hidden: T,
                visible: T
            },
            teacherSkills: {
                tier1: T,
                tier2: T,
                tier3: T,
                tier4: T,
                pic: T,
                oneOnOne: T,
                warmup: T,
                vip: T
            }
        }
    }
}
