import React from 'react'
import guard from 'react-guard'
import ReactDOM from 'react-dom'
import { Env } from 'lib/types'
import { App } from './app'
import './index.css'
import { Error } from './features/error'
import 'devextreme/dist/css/dx.light.css'

declare global {
    interface Window {
        env: Env
    }
}

guard(React, (err: any, componentInfo: any) => {
    // eslint-disable-next-line
    console.log(err)

    return (
        <Error/>
    )
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
