import { NeiRoute, UserRole } from 'lib/types'
import { routes } from '../routing'

export const userRoleHierarchy = {
    [UserRole.Student]: 0,
    [UserRole.Teacher]: 1,
    [UserRole.Admin]: 3
}

export const getUserRolePermissionCheck = (role: UserRole, routeMinRole: UserRole) =>
    userRoleHierarchy[role] >= userRoleHierarchy[routeMinRole]

export const getAccessibleRoutes = (role: UserRole, customRoutes?: Array<NeiRoute>) => (customRoutes || routes)
    .filter(route => {
        if (route.permissionRole && route.permissionRole !== role) {
            return false
        }

        if (route.minPermissionRole) {
            return getUserRolePermissionCheck(role, route.minPermissionRole)
        }

        return true
    })
