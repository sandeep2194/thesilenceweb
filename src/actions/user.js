
import { fetchUser, fetchNewsByAuthor } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_USER = 'ADD_USER'
export const RECEIVE_USER_NEWS = 'RECEIVE_USER_NEWS'

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}

function receiveNews(userId, news) {
    return {
        type: RECEIVE_USER_NEWS,
        news,
        userId,
    }
}

export function handleReceiveNews(authorId, pageNo, pageSize) {
    return (dispatch) => {
        dispatch(showLoading())
        fetchNewsByAuthor(authorId, pageNo, pageSize)
            .then((res) => {
                dispatch(receiveNews(authorId, res.result))
                dispatch(hideLoading())
            }).catch((err) => { console.error(err) })
    }
}

export function handleAddUser(id) {
    return (dispatch, getState) => {
        const { users } = getState()
        const check = (users === {}) ? null : (users[id]) ? true : false
        if (!check) {
            dispatch(showLoading())
            fetchUser(id)
                .then((res) => {
                    dispatch(addUser(res.result))
                    dispatch(hideLoading())
                })
                .catch((err) => {
                    dispatch(hideLoading())
                    console.error(err)
                })
        }
    }
}