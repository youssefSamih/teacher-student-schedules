export type KeyValuePair<T = any> = Record<string, T>
export type Nullable<T> = T | null
export type Undefinable<T> = T | undefined

export enum SideMenu {
    Hidden = 'hidden',
    Icons = 'icons',
    Open = 'open'
}

export enum PopperAnchor {
    Top = 'top',
    Left = 'left',
    Bottom = 'bottom',
    Right = 'right'
}

export enum NodeEnv {
    Development = 'development'
}
