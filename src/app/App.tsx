import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Router } from 'react-router-dom'
import { history } from 'lib/routing'
import { OutstatedProvider } from 'lib/components'
import { BaseRouter } from './components'
import 'react-toastify/dist/ReactToastify.css'

export const App: React.FunctionComponent = () => (
    <OutstatedProvider>
        <Router history={history}>
            <BaseRouter/>
        </Router>
        <ToastContainer/>
    </OutstatedProvider>
)
