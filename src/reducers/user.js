import { ADD_USER, } from '../actions/user'

export default function users(state = {}, action) {
    let oldState = { ...state }
    switch (action.type) {
        case ADD_USER:
            oldState[action.user._id] = action.user
            return {
                ...oldState
            }
        default:
            return state
    }
}