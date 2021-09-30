import { useTranslations } from './index'

export const useTranslationFromKey = () => {
    const T = useTranslations()

    return {
        getTranslationFromKey: (key: string) => key
            .split('.')
            .reduce((acc, key, index) => {
                if (index === 0) {
                    return T[key]
                }

                return acc[key]
            }, '')
    }
}
