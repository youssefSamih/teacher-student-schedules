import React, { useState } from 'react'

type HeaderState = {
    Element?: React.FunctionComponent,
    props?: {
        style?: React.CSSProperties
    }
}

export const useHeaderStore = () => {
    const [ headerState, setHeaderState ] = useState<HeaderState>({
        Element: undefined,
        props: {}
    })

    return {
        headerState,
        setHeaderState: (element?: React.FunctionComponent, props?: typeof headerState.props) => setHeaderState({
            Element: element,
            props
        }),
        setProps: <T>(props: Partial<T>) => setHeaderState(prevState => ({
            ...prevState,
            props: {
                ...prevState.props,
                ...props
            }
        }))
    }
}
