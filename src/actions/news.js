import { fetchNews } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'

function receiveNews(news) {
    return {
        type: RECEIVE_NEWS,
        news,
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

