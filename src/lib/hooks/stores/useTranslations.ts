import { useStore } from 'outstated'
import { useTranslationStore } from 'lib/stores'

export const useTranslations = () => useStore(useTranslationStore).translation
