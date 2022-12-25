import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sortState = [...state].sort((a, b) => a === b ? 0 : a.name > b.name ? 1 : -1);
            if(action.payload === 'up') {
                return sortState
            } else return sortState.reverse();
             // need to fix
        }
        case 'check': {
            return [...state].filter(a => a.age >= 18) // need to fix
        }
        default:
            return state
    }
}
