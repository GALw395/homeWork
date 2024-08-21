import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { 

            if (action.payload === 'up') {

                let sortState = state.sort((a, b) => a.name.localeCompare(b.name))
                return sortState

            } else if (action.payload === 'down') {

                let sortState = state.sort((a, b) => a.name.localeCompare(b.name)).reverse()
                return sortState

            }

            return state 
        }
        case 'check': {            
            let sortState = state.filter((a) => a.age >= 18 ).sort((a, b) => a.age - b.age)
            return sortState
        }
        default:
            return state
    }
}
