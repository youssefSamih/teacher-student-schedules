import React from 'react'
import { Redirect, Switch, useRouteMatch } from 'react-router-dom'
import { valueTranslations } from 'lib/utils'
import { NeiRoute, UserRole } from 'lib/types'
import { Paths, RouteWithSubRoutes } from 'lib/routing'
import { formatUrl } from '../utils'

type SwitchWrapperProps = {
    routes: Array<NeiRoute>,
    url?: string
}

export const SwitchWrapper: React.FunctionComponent<SwitchWrapperProps> = ({
    routes,
    url = ''
}) => {
    const { path } = useRouteMatch()
    // todo get it from store
    const myRoutes = valueTranslations.getAccessibleRoutes(UserRole.Admin, routes)

    return (
        <Switch>
            {myRoutes.map(({ path: localPath, ...route }, index) => {
                if (route.routes) {
                    return (
                        <RouteWithSubRoutes
                            key={`${path}-${index}`}
                            path={localPath}
                            {...route}
                        >
                            <SwitchWrapper
                                url=""
                                routes={route.routes}
                            />
                            {route.defaultPath && (
                                <Redirect to={formatUrl((url || path).concat(route.defaultPath))}/>
                            )}
                        </RouteWithSubRoutes>
                    )
                }

                return (
                    <RouteWithSubRoutes
                        key={`${path}-${index}`}
                        path={formatUrl(url.concat(localPath))}
                        {...route}
                    />
                )
            })}
            <Redirect to={Paths.NotFound}/>
        </Switch>
    )
}
