import { RECEIVE_NEWS, TOGGLE_LIKE, TOGGLE_BOOKMARK, TOGGLE_RETWEET, TOGGLE_SHARE, ADD_COMMENT } from '../actions/news'

export default function news(state = {}, action) {
    let item = { ...state[action.itemId] }
    let oldNews = { ...state }
    switch (action.type) {
        case RECEIVE_NEWS:
            let newNews = {}
            action.news.forEach((n) => {
                newNews[n._id] = n
            })
            return {
                ...state, ...newNews
            }
        case TOGGLE_LIKE:
            let newLikesArr = [...item.likesArr]
            if (newLikesArr.includes(action.userId)) {
                newLikesArr = newLikesArr.filter((id) => id !== action.userId)
            } else {
                newLikesArr.push(action.userId)
            }
            item.likesArr = [...newLikesArr]
            oldNews[action.itemId] = item
            return { ...oldNews }
        case TOGGLE_BOOKMARK:
            let newBookmarksArr = [...item.bookmarksArr]
            if (newBookmarksArr.includes(action.userId)) {
                newBookmarksArr = newBookmarksArr.filter((id) => id !== action.userId)
            } else {
                newBookmarksArr.push(action.userId)
            }
            item.bookmarksArr = [...newBookmarksArr]
            oldNews[action.itemId] = item
            return { ...oldNews }
        case TOGGLE_RETWEET:
            let newRetweetsArr = [...item.retweetsArr]
            newRetweetsArr.push(action.userId)
            item.retweetsArr = [...newRetweetsArr]
            oldNews[action.itemId] = item
            return { ...oldNews }
        case TOGGLE_SHARE:
            let newSharingArr = [...item.sharesArr]
            newSharingArr.push(action.userId)
            item.sharesArr = [...newSharingArr]
            oldNews[action.itemId] = item
            return { ...oldNews }
        case ADD_COMMENT:
            let newCommentArr = [...item.commentsArr]
            newCommentArr.push({
                content: action.content,
                userId: action.userId,
            })
            item.commentsArr = [...newCommentArr]
            oldNews[action.itemId] = item
            return { ...oldNews }
        default:
            return state
    }
}