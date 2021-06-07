import { fetchNews, interaction } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'

function receiveNews(news) {
    return {
        type: RECEIVE_NEWS,
        news,
    }
}
function toggleLike(itemId, userId) {
    return {
        type: TOGGLE_LIKE,
        itemId,
        userId,
    }
}
function toggleBookmark(itemId, userId) {
    return {
        type: TOGGLE_BOOKMARK,
        itemId,
        userId,
    }
}

export function handleToggleBookmark(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        const token = localStorage.getItem('token')
        if (authedUser._id && token) {
            dispatch(toggleBookmark(id, authedUser._id))
            interaction(id, 'bookmark', {}).then(() => {
                dispatch(hideLoading())
            }).catch((e) => {
                dispatch(hideLoading())
                dispatch(toggleBookmark(id, authedUser._id))
                console.warn(e)
            })
        } else {
            history.push('/send-otp')
        }

    }
}

export function handleToggleLike(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        const token = localStorage.getItem('token')
        if (authedUser._id && token) {
            dispatch(toggleLike(id, authedUser._id))
            interaction(id, 'like', {}).then(() => {
                dispatch(hideLoading())
            }).catch((e) => {
                dispatch(hideLoading())
                dispatch(toggleLike(id, authedUser._id))
                console.warn(e)
            })
        } else {
            history.push('/send-otp')
        }

    }
}

export function handleGetNews(pageNo, pageSize) {
    return (dispatch) => {
        dispatch(showLoading())
        fetchNews(pageNo, pageSize)
            .then((res) => {
                dispatch(receiveNews(res.result))
                dispatch(hideLoading())
            }).catch((e) => {
                console.error(e)
            })

    }
}

