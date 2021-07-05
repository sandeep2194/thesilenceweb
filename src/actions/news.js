import { fetchNews, interaction, uploadFile, postNews } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { CheckError } from '../utils/helper'
import { toggleUserBookmark } from './user'
import { save } from './drafts'
import { toastr } from 'react-redux-toastr'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'
export const TOGGLE_RETWEET = 'TOGGLE_RETWEET'
export const TOGGLE_SHARE = 'TOGGLE_SHARE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_POST = 'ADD_POST'

function addPost(article, id) {
    return {
        type: ADD_POST,
        article,
        id,
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
export const handleSendClick = (newsId) => {
    return (dispatch) => {
        dispatch(showLoading())
        interaction(newsId, 'click', {}).then(() => {
            dispatch(hideLoading())
        }).catch((error) => {
            dispatch(hideLoading())
            console.error(error)
        })
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
        dispatch(toggleUserBookmark(id))
        interaction(id, 'bookmark', {}).then(() => {
            dispatch(hideLoading())
        }).catch((e) => {
            dispatch(hideLoading())
            dispatch(toggleBookmark(id, userId))
            dispatch(toggleUserBookmark(id))
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

export function handlePostImageUploads(files, draft, history) {
    return (dispatch) => {
        dispatch(showLoading())
        uploadFile(files).then((data) => {
            dispatch(hideLoading())
            dispatch(save({ ...draft, s3Urls: data.result }))
            history.push('/post-meta')
        }).catch((e) => {
            toastr.error('Error Uploading Files', 'Unable to upload requested files to server. please try again later')
        })
    }
}

export function handleAddPost(article, history) {
    return (dispatch) => {
        const userId = localStorage.getItem('userId')
        postNews(article).then((data) => {
            dispatch(addPost(data.result, data.result._id))
            dispatch(save({}))
            history.push('/profile/' + userId)
        }).catch((e) => (console.error(e)))
    }
}

