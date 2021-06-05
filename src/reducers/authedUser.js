import { LOGIN, LOGOUT } from '../actions/authedUser'

export default function authedUser(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...action.user
            }
        case LOGOUT:
            return {}
        default:
            return state
    }
}