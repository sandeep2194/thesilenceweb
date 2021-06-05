import { SUCCESS_ALERT, FAILED_ALERT } from '../actions/alerts'

export default function alerts(state = '', action) {
    switch (action.type) {
        case FAILED_ALERT:
            return action.message
        case SUCCESS_ALERT:
            return action.message
        default:
            return state
    }
}