import { ADD_SCROLL, PLAY_TIME, COPY_USAGE, CLEAR_USAGE } from "../actions/usageTracking";

const usage = (state = {}, action) => {
    let oldState = { ...state }
    if (!oldState.scrolls)
        oldState.scrolls = 0;
    if (!oldState.playtime)
        oldState.playtime = 0

    switch (action.type) {
        case ADD_SCROLL:
            oldState.scrolls = oldState.scrolls + 1
            return { ...oldState }
        case PLAY_TIME:
            oldState.playtime = oldState.playtime + action.time
            return { ...oldState }
        case COPY_USAGE:
            oldState.copy = {
                scrolls: oldState.scrolls,
                playtime: oldState.playtime
            }
            return {
                ...oldState
            }
        case CLEAR_USAGE:
            oldState.scrolls = 0
            oldState.playtime = 0
            oldState.copy = {}
            return { ...oldState }
        default:
            return state
    }
}

export default usage