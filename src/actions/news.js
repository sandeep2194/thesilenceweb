import { fetchNews, updateReaction } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_BOOKMARK = 'ADD_BOOKMARK'

function receiveNews(news) {
    return {
        type: RECEIVE_NEWS,
        news,
    }
}
function toggleLike(newsItem, index) {
    return {
        type: TOGGLE_LIKE,
        newsItem,
        index,
    }
}

export function handleToggleLike(index, newsItem) {
    return (dispatch) => {
        dispatch(showLoading())

        const value = (newsItem.likedByUser) ? newsItem.likes - 1 : newsItem.likes + 1
        updateReaction('likes', value, newsItem.objectId)
            .then(() => {
                dispatch(toggleLike(newsItem, index))
                dispatch(hideLoading())
            }).catch((e) => console.warn("There was error in updating reaction", e))
    }
}

export function handleGetNews(skip, limit) {
    return (dispatch) => {
        dispatch(showLoading())
        fetchNews(skip, limit)
            .then((res) => {

                dispatch(receiveNews(res.results))
                dispatch(hideLoading())
            })
    }
}

