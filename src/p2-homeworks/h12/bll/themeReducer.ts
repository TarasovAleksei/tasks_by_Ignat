export type InitialStateType = {
    themesForFont: string[],
    themesForButton: string[],
    themesForInput: string[],
    currentColorFont: string,
    currentColorButton: string,
    currentColorInput: string,
}
const initialState = {
    themesForFont: ['dark', 'light', 'custom'],
    themesForButton: ['blue', 'brown', 'grey'],
    themesForInput: ['orange', 'brown', 'grey'],
    currentColorFont: 'light',
    currentColorButton: 'blue',
    currentColorInput: 'grey',
}
export const themeReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE_COLOR_FONT": {
            return {
                ...state,
                currentColorFont: action.themeFont
            }
        }
        case "CHANGE_COLOR_BUTTON": {
            return {
                ...state,
                currentColorButton: action.themeBtn
            }
        }
        case "CHANGE_COLOR_INPUT": {
            return {
                ...state,
                currentColorInput: action.themeInput
            }
        }
        default:
            return state;
    }
};
export type TotalActionType = changeColorFontAction | changeColorButtonAction | changeColorInputAction
export type changeColorFontAction = ReturnType<typeof changeColorFont>
export type changeColorButtonAction = ReturnType<typeof changeColorButton>
export type changeColorInputAction = ReturnType<typeof changeColorInput>
export const changeColorFont = (themeFont: string) => {
    return {
        type: "CHANGE_COLOR_FONT",
        themeFont
    } as const
}
export const changeColorButton = (themeBtn: string) => {
    return {
        type: "CHANGE_COLOR_BUTTON",
        themeBtn
    } as const
}
export const changeColorInput = (themeInput: string) => {
    return {
        type: "CHANGE_COLOR_INPUT",
        themeInput
    } as const
}
