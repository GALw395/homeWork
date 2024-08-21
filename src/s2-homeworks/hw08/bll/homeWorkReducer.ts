import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { 
            let sortState = state.slice()

            if (action.payload === 'up') {
                let returnState = sortState.sort((a, b) => a.name.localeCompare(b.name))
                console.log(returnState, state);
                return returnState
            } else if (action.payload === 'down') { 
                let returnState = sortState.sort((a, b) => a.name.localeCompare(b.name)).reverse()
                console.log(returnState, state);
                return returnState
            }
            console.log(sortState, state);
            

            return state 
        }
        case 'check': { 
            // let sortState = state.filter(a => a.age >= 18).sort((a, b) => a.age - b.age)
            // console.log(sortState, state)
            
            return state.filter(el => el.age >= action.payload).sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}
