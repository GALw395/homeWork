import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { 
            let sortState = state.slice()

            if (action.payload === 'up') {
                return sortState.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === 'down') {                
                return sortState.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            }

            return state 
        }
        case 'check': { 
            return state.filter(a => a.age >= 18).sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}
