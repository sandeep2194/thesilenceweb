import { TOGGLE_LIKE, TOGGLE_BOOKMARK, TOGGLE_SHARE, TOGGLE_RETWEET, ADD_COMMENT } from '../actions/news'
import history from '../utils/history'

const authCheck = (store) => (next) => (action) => {
    const token = localStorage.getItem('token')
    if (action.type === TOGGLE_BOOKMARK || action.type === TOGGLE_LIKE || action.type === TOGGLE_SHARE || action.type === TOGGLE_RETWEET || action.type === ADD_COMMENT) {
        if (token === 'undefined') {
            return next(action)
        } else {
            history.push('/send-otp')
        }
    } else {
        return next(action)
    }
}

export default authCheck