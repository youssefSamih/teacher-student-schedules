import { T, call, is } from 'ramda'

const isDefined = (subject: any) => typeof subject !== 'undefined' && subject !== null
const ifDefined = <T = any>(subject: any, then: (subject: T) => void) => isDefined(subject) && then(subject)
const hasElements = (subject: any) => Array.isArray(subject) && subject.length > 0

export {
    T,
    call,
    isDefined,
    ifDefined,
    hasElements,
    is
}
