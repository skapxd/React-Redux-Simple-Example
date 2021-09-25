import { enumCount } from "../action/CounterAction"

// BLOC: Business Logic Component
export const reducerCounter = (state = 0, action) => {
    if (action.type === enumCount.add) {
        return state + (action.payload ?? 1)
    }

    if (action.type === enumCount.minus) {
        return state - (action.payload ?? 1)
    }

    if (action.type === enumCount.reset) {
        return 0
    }

    return state
}
