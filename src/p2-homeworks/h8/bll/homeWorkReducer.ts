import {userType} from "../HW8";

export const homeWorkReducer = (state: userType[], action: TsarType): userType[] => {
    switch (action.type) {
        case 'sort': {

            return action.payload === 'up' ?
                [...state].sort((a, b) => {
                        if (a.name > b.name)
                            return 1
                        else if (a.name < b.name)
                            return -1
                        else return 0
                    }
                )
                : [
                    ...state].sort((a, b) => {

                    if (a.name < b.name)
                        return 1
                    else if (a.name > b.name)
                        return -1
                    else return 0
                })

        }
        case 'check': {
            return [...state.filter(s => s.age >= 18)]
        }
        default:
            return state
    }
}
type TsarType = SortPeopleACType | SortCheckPeopleACType

export type SortPeopleACType = ReturnType<typeof SortPeopleAC>
export type SortCheckPeopleACType = ReturnType<typeof CheckPeopleAC>

export const SortPeopleAC = (payload: string) => {
    return {
        type: 'sort',
        payload
    } as const
}
export const CheckPeopleAC = (payload: number) => {
    return {
        type: 'check',
        payload
    } as const
}