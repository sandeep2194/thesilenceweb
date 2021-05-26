import { RECEIVE_NEWS, TOGGLE_LIKE, TOGGLE_BOOKMARK } from '../actions/news'

export default function news(state = [], action) {
    const news = [...state]
    const newItem = { ...action.newsItem }
    switch (action.type) {
        case RECEIVE_NEWS:
            return [...state, ...action.news]
        case TOGGLE_LIKE:
            if (newItem.likedByUser === true) {
                newItem.likes -= 1
                newItem.likedByUser = false
            } else {
                newItem.likes += 1
                newItem.likedByUser = true
            }
            news[action.index] = newItem
            return [...news]
        case TOGGLE_BOOKMARK:
            if (newItem.bookmarkedByUser === true) {
                newItem.bookmarkCount -= 1
                newItem.bookmarkedByUser = false
            } else {
                newItem.bookmarkCount += 1
                newItem.bookmarkedByUser = true
            }
            news[action.index] = newItem
            return [...news]
        default:
            return state
    }
}