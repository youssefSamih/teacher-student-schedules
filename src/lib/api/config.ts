import axios from 'axios'
import { CONFIG } from 'lib/config'
import { NodeEnv } from 'lib/types'

export const setAxiosDefaults = () => {
    axios.defaults.baseURL = CONFIG.API_URL
    axios.defaults.timeout = parseInt(CONFIG.TIMEOUT || '10000', 10)
}

axios.interceptors.request.use(request => {
    if (process.env.NODE_ENV === NodeEnv.Development) {
        request.headers.Authorization = process.env.REACT_APP_TOKEN
    }

    return request
})
