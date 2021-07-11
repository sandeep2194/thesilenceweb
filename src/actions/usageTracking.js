import { sendUsageTime } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'
export const ADD_SCROLL = 'ADD_SCROLL'
export const PLAY_TIME = 'PLAY_TIME'
export const COPY_USAGE = 'COPY_USAGE'
export const CLEAR_USAGE = 'CLEAR_USAGE'

export const addPlayTime = (time) => {
    return {
        type: PLAY_TIME,
        time,
    }
}

export const addScroll = () => {
    return {
        type: ADD_SCROLL
    }
}


const copyUsage = () => {
    return {
        type: COPY_USAGE
    }
}

const clearUsage = () => {
    return {
        type: CLEAR_USAGE
    }
}
export const handleSendData = () => {
    return (dispatch, getState) => {
        let { usage } = getState()
        dispatch(showLoading())
        if (usage.copy) {
            usage.scrolls = usage.scrolls + usage.copy.scrolls
            usage.playtime = usage.playtime + usage.copy.playtime
        }
        sendUsageTime(
            {
                playTime: usage.playtime,
                scrolls: usage.scrolls
            })
            .then(() => {
                dispatch(clearUsage())
                dispatch(hideLoading())
            })
            .catch((e) => {
                console.error(e)
                dispatch(copyUsage())
                dispatch(hideLoading())
            })
    }
}
