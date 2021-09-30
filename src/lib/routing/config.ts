import { createBrowserHistory } from 'history'
import { CONFIG } from '../config'

export const history = createBrowserHistory({
    basename: CONFIG.PATH_NAME
})
