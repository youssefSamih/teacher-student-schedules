import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Paths, routes } from 'lib/routing'
import { SwitchWrapper } from './SwitchWrapper'

export const Router: React.FunctionComponent = () => (
    <Switch>
        <SwitchWrapper routes={routes}/>
        <Redirect to={Paths.Root}/>
    </Switch>
)
