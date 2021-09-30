import { useConfigStore } from './useConfigStore'
import { useTranslationStore } from './useTranslationStore'
import { usePopperState } from './usePopperStore'
import { useHeaderStore } from './useHeaderStore'
import { useSchedulerStore } from './useSchedulerStore'
import { useDatePickerStore } from './useDatePickerStore'
import { useUserStore } from './useUserStore'
import { useAdminOnDutyStore } from './useAdminOnDutyStore'
import { useTeachersStore } from './useTeachersStore'

export const stores = [
    useConfigStore,
    useTranslationStore,
    usePopperState,
    useHeaderStore,
    useSchedulerStore,
    useDatePickerStore,
    useUserStore,
    useAdminOnDutyStore,
    useTeachersStore
]

export {
    useConfigStore,
    useTranslationStore,
    usePopperState,
    useHeaderStore,
    useSchedulerStore,
    useDatePickerStore,
    useUserStore,
    useAdminOnDutyStore,
    useTeachersStore
}
