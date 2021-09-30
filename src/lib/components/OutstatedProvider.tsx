import React from 'react'
import { Provider } from 'outstated'
import { stores } from 'lib/stores'

export const OutstatedProvider: React.FunctionComponent = ({ children }) => (
    <Provider stores={stores}>
        {children}
    </Provider>
)
