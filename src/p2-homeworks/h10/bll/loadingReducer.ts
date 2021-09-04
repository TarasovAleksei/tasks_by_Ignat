const initState = {
    loading: false,
}
export type initStateType = {
    loading: boolean,
}
type loadingActionType = {
    type: 'SET_LOADING',
    loading: boolean,
}
export const loadingReducer = (state:initStateType = initState, action: loadingActionType): initStateType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): loadingActionType => {
    return {
        type: 'SET_LOADING',
        loading
    }
}