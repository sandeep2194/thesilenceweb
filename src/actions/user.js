import { fetchUser, fetchNewsByAuthor, followUser, getFollowers, getFollowings } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { CheckError } from '../utils/helper'
import { receiveNews } from './news'

export const ADD_USER = 'ADD_USER'
export const TOGGLE_USER_BOOKMARK = 'TOGGLE_USER_BOOKMARK'
export const UPDATE_USER = 'UPDATE_USER'
export const TOGGLE_FOLLOW = 'FOLLOW'
export const ADD_FOLLOWERS_DATA = 'ADD_FOLLOWERS_DATA'
export const ADD_FOLLOWING_DATA = 'ADD_FOLLOWING_DATA'
export const TOGGLE_FOLLOWED_BY_THIS_USER = 'TOGGLE_FOLLOWED_BY_THIS_USER'

const toggleFollowedByThisUser = (userId) => {
    return {
        type: TOGGLE_FOLLOWED_BY_THIS_USER,
        userId,
    }
}

function addFollowingData(followingData, userId) {
    return {
        type: ADD_FOLLOWING_DATA,
        followingData,
        userId
    }
}

function addFollowersData(followersData, userId) {
    return {
        type: ADD_FOLLOWERS_DATA,
        followersData,
        userId,
    }
}

function toggleFollow(followingId) {
    return {
        type: TOGGLE_FOLLOW,
        followingId,
    }
}


export function updateUser(user) {
    return {
        type: UPDATE_USER,
        user,
    }
}

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
export function handleAddFollowingData(userId) {
    return (dispatch) => {
        getFollowings(userId).then((data) => {
            const followings = data.result
            const followingIds = followings.map((u) => u._id)
            followings.forEach((item) => dispatch(addUser(item)))
            dispatch(addFollowingData(followingIds, userId))
        }).catch((error) => { console.error(error) })
    }
}

export function handleAddFollowersData(followingId) {
    return (dispatch) => {
        getFollowers(followingId).then((data) => {
            const followers = data.result
            const followerIds = followers.map((u) => u._id)
            followers.forEach((item) => dispatch(addUser(item)))
            dispatch(addFollowersData(followerIds, followingId))
        }).catch(err => console.error(err))
    }
}

export function handleFollow(followingId) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(toggleFollow(followingId))
        dispatch(toggleFollowedByThisUser(followingId))
        followUser(followingId).then(() => {
            dispatch(hideLoading())
        }).catch((error) => {
            dispatch(toggleFollow(followingId))
            dispatch(toggleFollowedByThisUser(followingId))
            dispatch(hideLoading())
            console.error(error)
        })
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