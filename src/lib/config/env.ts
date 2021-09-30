import { ReactEnv } from '../types'

export const CONFIG: ReactEnv = {
    TIMEOUT: window?.env?.REACT_APP_API_TIMEOUT || process.env.REACT_APP_API_TIMEOUT || '',
    API_URL: window?.env?.REACT_APP_API_URL || process.env.REACT_APP_API_URL || '',
    ROSTER_URL: window?.env?.REACT_APP_ROSTER_URL || process.env.REACT_APP_ROSTER_URL || '',
    FULCRUM_URL: window?.env?.REACT_APP_FULCRUM_URL || process.env.REACT_APP_FULCRUM_URL || '',
    DATADOG_CLIENT_TOKEN: window?.env?.REACT_APP_DATADOG_CLIENT_TOKEN || process.env.REACT_APP_DATADOG_CLIENT_TOKEN || '',
    PATH_NAME: window?.env?.REACT_APP_PATH_NAME || process.env.REACT_APP_PATH_NAME || '',
    DATADOG_APP_ID: window?.env?.REACT_APP_DATADOG_APP_ID || process.env.REACT_APP_DATADOG_APP_ID || '',
    DD_SERVICE: window?.env?.DD_SERVICE || process.env.DD_SERVICE || ''
}
