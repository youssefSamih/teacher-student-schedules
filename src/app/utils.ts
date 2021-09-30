export const formatUrl = (url: string) => `/${url
    .split('/')
    .filter(item => item !== '')
    .join('/')}`
