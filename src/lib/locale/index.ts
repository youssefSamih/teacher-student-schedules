import { en_US } from './en_US'
import { ru_RU } from './ru_RU'
import { ja_JP } from './ja_JP'

export enum Languages {
    en_US = 'en_US',
    ru_RU = 'ru_RU',
    ja_JP = 'ja_JP'
}

export enum NeiLanguages {
    en_US = 'en_US',
    ru_RU = 'ru_RU',
    ja_JP = 'ja_JP'
}

export enum BrowserLanguage {
    en = 'en',
    ru = 'ru',
    ja = 'ja'
}

export const browserToCodeLanguage = {
    [BrowserLanguage.en]: Languages.en_US,
    [BrowserLanguage.ja]: Languages.ja_JP,
    [BrowserLanguage.ru]: Languages.ru_RU
}

export const languages = {
    [Languages.en_US]: en_US,
    [Languages.ru_RU]: ru_RU,
    [Languages.ja_JP]: ja_JP
}
