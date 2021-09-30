export const stylesHelpers = {
    customWhiteTransparent: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    customBlackTransparent: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    hexToRGBA: (hex: string, opacity: number) => hex
        .replace('#', '')
        .split(/(?=(?:..)*$)/)
        .map(x => parseInt(x, 16))
        .filter(num => !isNaN(num))
        .reduce((acc, color) => `${acc}${color},`, 'rgba(')
        .concat(`${opacity})`)
}
