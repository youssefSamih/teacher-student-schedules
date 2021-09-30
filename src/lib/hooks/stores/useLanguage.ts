import { useStore } from 'outstated'
import { useTranslationStore } from 'lib/stores'

export const useLanguage = () => useStore(useTranslationStore)
