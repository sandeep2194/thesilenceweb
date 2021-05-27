import { RECEIVE_NEWS, TOGGLE_LIKE, TOGGLE_BOOKMARK } from '../actions/news'

export default function news(state = {}, action) {
    let item = { ...state[action.id] }
    let oldNews = { ...state }
    switch (action.type) {
        case RECEIVE_NEWS:
            let newNews = {}
            action.news.forEach((n) => {
                return newNews[n.objectId] = n
            })
            return {
                ...state, ...newNews
            }
        case TOGGLE_LIKE:
            if (item.likedByUser) {
                item.likes -= 1
                item.likedByUser = false
            } else {
                item.likes += 1
                item.likedByUser = true
            }
            oldNews[action.id] = item
            return {
                ...oldNews
            }
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