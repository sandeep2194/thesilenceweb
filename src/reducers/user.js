import { ADD_USER, TOGGLE_USER_BOOKMARK, UPDATE_USER } from '../actions/user'

export default function users(state = {}, action) {
    let oldState = { ...state }
    const userId = localStorage.getItem('userId')
    let user = { ...oldState[userId] }
    switch (action.type) {
        case ADD_USER:
            oldState[action.user._id] = action.user
            return {
                ...oldState
            }
        case TOGGLE_USER_BOOKMARK:
            let newBookmarksArr = [...user.bookmarks]
            if (newBookmarksArr.includes(action.postId)) {
                newBookmarksArr = newBookmarksArr.filter(b => b !== action.postId)
            } else {
                newBookmarksArr.push(action.postId)
            }
            user.bookmarks = newBookmarksArr
            oldState[userId] = { ...user }
            return { ...oldState }
        case UPDATE_USER:
            let newUser = { ...user, ...action.user }
            oldState[userId] = { ...newUser }
            return { ...oldState }
        default:
            return state
    }
}