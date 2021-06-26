import { ADD_USER, TOGGLE_USER_BOOKMARK, UPDATE_USER, TOGGLE_FOLLOW, ADD_FOLLOWERS_DATA, ADD_FOLLOWING_DATA } from '../actions/user'

export default function users(state = {}, action) {
    let oldState = { ...state }
    const userId = localStorage.getItem('userId')
    let user = { ...oldState[userId] }
    let user2 = { ...oldState[action.userId] }
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
        case TOGGLE_FOLLOW:
            let followedUser = { ...oldState[action.followingId] }
            if (!user.followingData) {
                user.followingData = []
            }
            if (!followedUser.followersData) {
                followedUser.followersData = []
            }
            let followersData = followedUser.followersData
            let followingData = user.followingData
            const followedByUser = followingData.includes(action.followingId)
            if (followedByUser) {
                user.following--
                followedUser.followers--
                followingData = followingData.filter((u) => u !== action.followingId)
                followersData = followersData.filter((u) => u !== userId)
                user.followingData = followingData
                followedUser.followersData = followersData
            } else if (!followedByUser) {
                user.following++
                followedUser.followers++
                followingData.push(action.followingId)
                followersData.push(userId)
            }
            oldState[userId] = { ...user }
            oldState[action.followingId] = { ...followedUser }
            return { ...oldState }
        case ADD_FOLLOWERS_DATA:
            if (!user2.followersData) {
                user2.followersData = []
            }
            const newFollowersData = [...action.followersData]
            user2.followersData = newFollowersData
            oldState[action.userId] = user2
            return { ...oldState }
        case ADD_FOLLOWING_DATA:
            if (!user2.followingData) {
                user2.followingData = []
            }
            const newFollowingData = [...action.followingData]
            user2.followingData = newFollowingData
            oldState[action.userId] = user2
            return { ...oldState }
        default:
            return state
    }
}