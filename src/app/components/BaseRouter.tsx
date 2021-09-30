import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Popper } from 'lib/components'
import { routes, AppContainer, Paths } from 'lib/routing'
import { SwitchWrapper } from './SwitchWrapper'

export const BaseRouter = () => (
    <Switch>
        <AppContainer>
            <SwitchWrapper routes={routes}/>
            <Popper/>
            <Route
                exact
                path={Paths.Root}
            >
                <Redirect to={Paths.Scheduler}/>
            </Route>
        </AppContainer>
    </Switch>
)
