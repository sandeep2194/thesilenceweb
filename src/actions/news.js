import { fetchNews, interaction } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleReceiveBookmarksData } from './authedUser'
import history from '../utils/history'
import { toastr } from 'react-redux-toastr'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'
export const TOGGLE_RETWEET = 'TOGGLE_RETWEET'
export const TOGGLE_SHARE = 'TOGGLE_SHARE'
export const ADD_COMMENT = 'ADD_COMMENT'

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
function toggleRetweet(itemId, userId) {
    return {
        type: TOGGLE_RETWEET,
        itemId,
        userId,
    }
}
function toggleShare(itemId, userId) {
    return {
        type: TOGGLE_SHARE,
        itemId,
        userId,
    }
}

function addComment(itemId, userId, content) {
    return {
        type: ADD_COMMENT,
        itemId,
        userId,
        content,
    }
}

export function handleAddComment(id, content) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        dispatch(addComment(id, authedUser._id, content))
        interaction(id, 'comment', {
            content: content
        }).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(addComment(id, authedUser._id, content))
            console.warn(e)
            if (e.message.includes('403')) {
                history.push('/send-otp')
                toastr.info('Please login again - Session Expired!')
            }
        })
    }
}

export function handleToggleShare(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        dispatch(toggleShare(id, authedUser._id))
        interaction(id, 'share', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleShare(id, authedUser._id))
            console.warn(e)
            if (e.message.includes('403')) {
                history.push('/send-otp')
                toastr.info('Please login again - Session Expired!')
            }
        })
    }
}

export function handleToggleRetweet(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        dispatch(toggleRetweet(id, authedUser._id))
        interaction(id, 'retweet', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleRetweet(id, authedUser._id))
            console.warn(e)
            if (e.message.includes('403')) {
                history.push('/send-otp')
                toastr.info('Please login again - Session Expired!')
            }
        })
    }
}

export function handleToggleBookmark(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        dispatch(toggleBookmark(id, authedUser._id))
        interaction(id, 'bookmark', {}).then(() => {
            dispatch(hideLoading())
            dispatch(handleReceiveBookmarksData())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleBookmark(id, authedUser._id))
            console.warn(e)
            if (e.message.includes('403')) {
                history.push('/send-otp')
                toastr.info('Please login again - Session Expired!')
            }
        })

    }
}

export function handleToggleLike(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        dispatch(toggleLike(id, authedUser._id))
        interaction(id, 'like', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleLike(id, authedUser._id))
            if (e.message.includes('403')) {
                history.push('/send-otp')
                toastr.info('Please login again - Session Expired!')
            }
        })

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

