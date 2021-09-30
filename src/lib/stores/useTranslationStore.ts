import { useState } from 'react'
import { Dictionary } from 'lib/types'
import { BrowserLanguage, Languages, languages, browserToCodeLanguage } from 'lib/locale'

export const useTranslationStore = () => {
    const browserLanguage = window.navigator.language.slice(0, 2)
    const isLanguageRecognized = BrowserLanguage[browserLanguage]
        ? browserToCodeLanguage[browserLanguage]
        : Languages.en_US
    const [ language, setLanguage ] = useState<Languages>(isLanguageRecognized)

    return {
        language,
        translation: languages[language] as Dictionary,
        languageActions: {
            setLanguage
        }
    }
}
