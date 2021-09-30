import React from 'react'
import { RouteProps } from 'react-router-dom'
import { Paths } from 'lib/routing'
import { SvgIcon } from './icon'
import { UserRole } from './user'

export interface NeiRoute extends RouteProps {
    routes?: Array<NeiRoute>,
    defaultPath?: Paths,
    path: string,
    component?: React.ComponentType<any>,
    name: string,
    Icon?: React.ComponentType<SvgIcon>,
    link?: string,
    minPermissionRole?: UserRole,
    permissionRole?: UserRole,
    hidden?: boolean
}

export type ErrorPage = {
    isBrowserSupported: boolean
}

export enum HistoryAction {
    POP = 'POP',
    PUSH = 'PUSH',
    REPLACE = 'REPLACE'
}
