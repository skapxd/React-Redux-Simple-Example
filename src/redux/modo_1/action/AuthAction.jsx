// Types - Note: never call "enumeraciones" directy
export const enumAuth = {
    'log-in': 'log-in',
    'log-out': 'log-out',
}

// Functions to call, it's can has payload
export const logInDispatch = () => ({
    type: enumAuth['log-in'],
})

export const logOutDispatch = () => ({
    type: enumAuth['log-out'],
})
