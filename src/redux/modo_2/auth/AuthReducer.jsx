import { enumAuth } from "../../modo_1/action/AuthAction"

// BLOC: Business Logic Component
export const reducerAuth = (state = false, action) => {
    if (action.type === enumAuth['log-in']) {
        return true
    }

    if (action.type === enumAuth['log-out']) {
        return false
    }

    return state
}
