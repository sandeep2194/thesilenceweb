import { TOGGLE_LIKE, TOGGLE_BOOKMARK, TOGGLE_SHARE, TOGGLE_RETWEET, ADD_COMMENT } from '../actions/news'
import { UPDATE_USER } from '../actions/authedUser'
import history from '../utils/history'

const authCheck = (store) => (next) => (action) => {
    const token = localStorage.getItem('token')
    if (action.type === TOGGLE_BOOKMARK || action.type === TOGGLE_LIKE || action.type === TOGGLE_SHARE || action.type === TOGGLE_RETWEET || action.type === ADD_COMMENT || action.type === UPDATE_USER) {

        if (token) {
            return next(action)
        } else {
            history.push('/send-otp')
        }
    } else {
        return next(action)
    }
}

export default authCheck