import React from 'react'
import { Route } from 'react-router-dom'
import { NeiRoute } from 'lib/types'

export const RouteWithSubRoutes: React.FunctionComponent<NeiRoute> = route => (
    <Route
        path={route.path}
        render={props => (
            // @ts-ignore
            <route.component
                {...props}
                routes={route.routes}
            >
                {route.children}
            </route.component>
        )}
    />
)
