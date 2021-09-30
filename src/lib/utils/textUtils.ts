export const upperCaseFirstLetter = (text?: string) => {
    if (!text) {
        return ''
    }

    const firstLetter = text
        .charAt(0)
        .toUpperCase()
    const rest = text
        .slice(1, text.length)

    return `${firstLetter}${rest}`
}

export const limitText = (text?: string, limit: number = 20) => {
    if (!text) {
        return ''
    }

    if (text.length > limit) {
        return `${text.slice(0, limit)}...`
    }

    return text
}
