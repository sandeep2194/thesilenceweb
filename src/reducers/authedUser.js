import { LOGIN, LOGOUT, UPDATE_USER, RECEIVE_BOOKMARKS_DATA } from '../actions/authedUser'

export default function authedUser(state = {}, action) {
    let oldState = { ...state }
    switch (action.type) {
        case LOGIN:
            return {
                ...action.user
            }
        case LOGOUT:
            return {}
        case UPDATE_USER:
            oldState.name = action.user.name
            oldState.email = action.user.email
            oldState.username = action.user.username
            return {
                ...oldState
            }
        case RECEIVE_BOOKMARKS_DATA:
            oldState.bookmarksData = [...action.data]
            return {
                ...oldState
            }
        default:
            return state
    }
}