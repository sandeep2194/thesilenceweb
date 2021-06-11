import { getOtp, verifyOtp, postUser, fetchBookmarks } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'
import { toastr } from 'react-redux-toastr'
import { addUser } from './user'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_USER = 'UPDATE_USER'
export const RECEIVE_BOOKMARKS_DATA = 'RECEIVE_BOOKMARKS_DATA'

function login(user) {
    return {
        type: LOGIN,
        user,
    }
}
function logout() {
    return {
        type: LOGOUT,
    }
}
function updateUser(user) {
    return {
        type: UPDATE_USER,
        user,
    }
}

function receiveBookmarksData(data) {
    return {
        type: RECEIVE_BOOKMARKS_DATA,
        data,
    }
}

export function handleReceiveBookmarksData() {
    return (dispatch) => {
        dispatch(showLoading())
        fetchBookmarks()
            .then((res) => {
                dispatch(receiveBookmarksData(res.result))
                dispatch(hideLoading())
            }).catch((err) => {
                dispatch(hideLoading())
                console.error(err)
            })
    }
}
export function handleUpdateUser(userObj) {
    return (dispatch) => {
        dispatch(showLoading())
        postUser(userObj).then(() => {
            dispatch(updateUser(userObj))
            dispatch(hideLoading)
            toastr.info('Updated', 'Your info has been updated')
            history.push('/')
        }).catch((e) => {
            console.error(e)
            dispatch(hideLoading())
        })
    }
}


export function handleGetOtp(phoneNumber) {
    return (dispatch) => {
        dispatch(showLoading())
        getOtp(phoneNumber)
            .then(() => {
                history.push({
                    pathname: '/verify',
                    state: phoneNumber.toString(),
                })
                dispatch(hideLoading())
            })
            .catch((err) => {
                toastr.error('Error sending OTP', 'please try again later.')
                console.error(err)
            })

    }
}


export function handleVerifyOtp(phoneNumber, OTP) {
    return (dispatch) => {
        dispatch(showLoading())
        verifyOtp(phoneNumber, OTP)
            .then((res) => {
                const username = res.userInfo.username;
                localStorage.setItem('token', res.token);
                dispatch(login(res.userInfo))
                dispatch(addUser(res.userInfo))
                if (!username) {
                    history.push('/getting-started')
                } else {
                    history.push('/')
                }
                dispatch(hideLoading())

                toastr.info(`Login Success`)
            }).catch((err) => {
                toastr.error('Error verifying OTP', 'please try again later.')
                console.error(err)
            })
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(logout())
        localStorage.removeItem('token');
        dispatch(hideLoading())
        toastr.info(`you have logged out successfully`)
    }
}