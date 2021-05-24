import { RECEIVE_NEWS } from '../actions/news'

export default function news(state = [], action) {
    switch (action.type) {
        case RECEIVE_NEWS:
            return [...state, ...action.news]
        default:
            return state
    }
}