import { RECEIVE_NEWS, TOGGLE_LIKE } from '../actions/news'

export default function news(state = [], action) {
    switch (action.type) {
        case RECEIVE_NEWS:
            return [...state, ...action.news]
        case TOGGLE_LIKE:
            const news = [...state]
            const newItem = { ...action.newsItem }
            if (newItem.likedByUser === true) {
                newItem.likes -= 1
                newItem.likedByUser = false
            } else {
                newItem.likes += 1
                newItem.likedByUser = true
            }
            news[action.index] = newItem
            return [...news]
        default:
            return state
    }
}