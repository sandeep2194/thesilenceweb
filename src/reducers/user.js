import { ADD_USER, TOGGLE_USER_BOOKMARK } from '../actions/user'

export default function users(state = {}, action) {
    let oldState = { ...state }
    switch (action.type) {
        case ADD_USER:
            oldState[action.user._id] = action.user
            return {
                ...oldState
            }
        case TOGGLE_USER_BOOKMARK:
            const userId = localStorage.getItem('userId')
            let newUser = { ...oldState[userId] }
            let newBookmarksArr = [...newUser.bookmarks]
            if (newBookmarksArr.includes(action.postId)) {
                newBookmarksArr = newBookmarksArr.filter(b => b !== action.postId)
            } else {
                newBookmarksArr.push(action.postId)
            }
            newUser.bookmarks = newBookmarksArr
            oldState[userId] = { ...newUser }
            return { ...oldState }
        default:
            return state
    }
}