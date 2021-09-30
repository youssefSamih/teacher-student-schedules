import { history } from 'lib/routing'

export const GOTO = <T = any>(location: string, state?: T) => history.push(location, state)
export const GOBACK = () => history.goBack()
