import { RECEIVE_NEWS, TOGGLE_LIKE, TOGGLE_BOOKMARK } from '../actions/news'

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
            if (item.bookmarkedByUser) {
                item.bookmarksCount -= 1
                item.bookmarkedByUser = false
            } else {
                item.bookmarksCount += 1
                item.bookmarkedByUser = true
            }
            oldNews[action.id] = item
            return {
                ...oldNews
            }
        default:
            return state
    }
}