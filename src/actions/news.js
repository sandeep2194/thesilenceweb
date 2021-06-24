import { fetchNews, interaction } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleReceiveBookmarksData } from './authedUser'
import { CheckError } from '../utils/helper'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'
export const TOGGLE_RETWEET = 'TOGGLE_RETWEET'
export const TOGGLE_SHARE = 'TOGGLE_SHARE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_SCROLL_POSITION = 'UPDATE_SCROLL_POSITION'

export function updateScrollPosition(pageYOffset) {
    return {
        type: UPDATE_SCROLL_POSITION,
        pageYOffset,
    }
}

export function receiveNews(news) {
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
    return (dispatch) => {
        const userId = localStorage.getItem('userId')
        dispatch(showLoading())
        dispatch(addComment(id, userId, content))
        interaction(id, 'comment', {
            content: content
        }).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(addComment(id, userId, content))
            console.warn(e)
            CheckError(e)
        })
    }
}

export function handleToggleShare(id) {
    return (dispatch) => {
        dispatch(showLoading())
        const userId = localStorage.getItem('userId')
        dispatch(toggleShare(id, userId))
        interaction(id, 'share', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleShare(id, userId))
            console.warn(e)

            CheckError(e)
        })
    }
}

export function handleToggleRetweet(id) {
    return (dispatch) => {
        dispatch(showLoading())
        const userId = localStorage.getItem('userId')
        dispatch(toggleRetweet(id, userId))
        interaction(id, 'retweet', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleRetweet(id, userId))
            console.warn(e)

            CheckError(e)
        })
    }
}

export function handleToggleBookmark(id) {
    return (dispatch) => {
        dispatch(showLoading())
        const userId = localStorage.getItem('userId')
        dispatch(toggleBookmark(id, userId))
        interaction(id, 'bookmark', {}).then(() => {
            dispatch(hideLoading())
            dispatch(handleReceiveBookmarksData())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleBookmark(id, userId))
            console.warn(e)

            CheckError(e)
        })

    }
}

export function handleToggleLike(id) {
    return (dispatch) => {
        dispatch(showLoading())
        const userId = localStorage.getItem('userId')
        dispatch(toggleLike(id, userId))
        interaction(id, 'like', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleLike(id, userId))

            CheckError(e)
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

