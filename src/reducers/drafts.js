import { SAVE } from '../actions/drafts'

export default function drafts(state = {}, action) {
    switch (action.type) {
        case SAVE:
            return { ...action.article }
        default:
            return state
    }
}