// Types - Note: never call "enumeraciones" directy
export const enumCount = {
    add: 'add',
    minus: 'minus',
    reset: 'reset',
}

// Functions to call, it's can has payload
export const addDispatch = (num) => ({
    type: enumCount.add,
    payload: num,
})
export const minusDispatch = (num) => ({
    type: enumCount.minus,
    payload: num,
})
export const resetDispatch = () => ({
    type: enumCount.reset,
})
