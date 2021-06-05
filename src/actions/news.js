import { fetchNews, updateReaction } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
 
export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'

function receiveNews(news) {
    return {
        type: RECEIVE_NEWS,
        news,
    }
}
function toggleLike(id) {
    return {
        type: TOGGLE_LIKE,
        id,
    }
}
function toggleBookmark(id) {
    return {
        type: TOGGLE_BOOKMARK,
        id,
    }
}

export function handleToggleBookmark(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { news } = getState()
        const newsItem = news[id]
        const value = (newsItem.bookmarkedByUser) ? newsItem.bookmarkCount - 1 : newsItem.bookmarkCount + 1
        updateReaction('bookmarksCount', value, newsItem.objectId)
            .then(() => {
                dispatch(toggleBookmark(id))
                dispatch(hideLoading())
            }).catch((e) => console.warn("There was error in updating reaction", e))
    }
}

export function handleToggleLike(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { news } = getState()
        const newsItem = news[id]
        const value = (newsItem.likedByUser) ? newsItem.likes - 1 : newsItem.likes + 1
        updateReaction('likes', value, id)
            .then(() => {
                dispatch(toggleLike(id))
                dispatch(hideLoading())
            }).catch((e) => console.warn("There was error in updating reaction", e))
    }
}

export function handleGetNews(pageNo, pageSize) {
    return (dispatch) => {
        dispatch(showLoading())
        fetchNews(pageNo, pageSize)
            .then((res) => {
                if (res.result) {
                    dispatch(receiveNews(res.result))
                }
                dispatch(hideLoading())
            })
    }
}

