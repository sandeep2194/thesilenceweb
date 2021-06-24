
import { fetchUser, fetchNewsByAuthor } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { CheckError } from '../utils/helper'

import { receiveNews } from './news'
export const ADD_USER = 'ADD_USER'
export const TOGGLE_USER_BOOKMARK = 'TOGGLE_USER_BOOKMARK'

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}

export function toggleUserBookmark(postId) {
    return {
        type: TOGGLE_USER_BOOKMARK,
        postId,
    }
}

export function handleReceiveNews(authorId, pageNo, pageSize) {
    return (dispatch) => {
        dispatch(showLoading())
        fetchNewsByAuthor(authorId, pageNo, pageSize)
            .then((res) => {
                if (res.data.result.length !== 0) {
                    dispatch(receiveNews(res.data.result))
                }
                dispatch(hideLoading())
            }).catch((err) => {
                console.error(err)
                CheckError(err)
            })
    }
}

export function handleAddUser(id) {
    return (dispatch, getState) => {
        const token = localStorage.getItem('token')
        const { users } = getState()
        const check = (users === {}) ? null : (users[id]) ? true : false
        if (!check && token) {
            dispatch(showLoading())
            fetchUser(id)
                .then((res) => {
                    dispatch(addUser(res.result))
                    dispatch(hideLoading())
                })
                .catch((err) => {
                    dispatch(hideLoading())
                    console.error(err)
                    CheckError(err)

                })
        }
    }
}