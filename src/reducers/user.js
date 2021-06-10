import { ADD_USER, RECEIVE_USER_NEWS } from '../actions/user'

export default function users(state = {}, action) {
    let oldState = { ...state }
    switch (action.type) {
        case ADD_USER:
            oldState[action.user._id] = action.user
            return {
                ...oldState
            }
        case RECEIVE_USER_NEWS:
            if (oldState[action.userId].news) {
                oldState[action.userId].news = [...oldState[action.userId].news, ...action.news]
            } else {
                oldState[action.userId].news = action.news
            }
            return {
                ...oldState
            }
        default:
            return state
    }
}