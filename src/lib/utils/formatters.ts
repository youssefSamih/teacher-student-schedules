export const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName) {
        return ''
    }

    const firstNameInitial = firstName.charAt(0)
    const lasNameInitial = lastName?.charAt(0) || ''

    return firstNameInitial.concat(lasNameInitial)
}
