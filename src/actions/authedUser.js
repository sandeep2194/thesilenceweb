import { getOtp, verifyOtp, postUser, fetchBookmarks } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'
import { toastr } from 'react-redux-toastr'
import { addUser } from './user'
import { CheckError } from '../utils/helper'
import { receiveNews } from './news'




export function handleReceiveBookmarksData() {
    return (dispatch) => {
        dispatch(showLoading())
        fetchBookmarks()
            .then((res) => {
                dispatch(receiveNews(res.data.result))
                dispatch(hideLoading())
            }).catch((err) => {
                console.error(err)
                dispatch(hideLoading())
                console.log(err)
                CheckError(err)
            })
    }
}
export function handleUpdateUser(userObj) {
    return (dispatch) => {
        dispatch(showLoading())
        postUser(userObj).then(() => {
            dispatch(addUser(userObj))
            dispatch(hideLoading)
            history.push('/choose-language-location')
        }).catch((e) => {
            console.error(e)
            dispatch(hideLoading())

            CheckError(e)
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
        localStorage.clear('persist:persistedStore', 'userId', 'token');
        verifyOtp(phoneNumber, OTP)
            .then((res) => {
                const username = res.userInfo.username;
                localStorage.setItem('token', res.token);
                localStorage.setItem('userId', res.userInfo._id)
                dispatch(addUser(res.userInfo))
                if (!username) {
                    history.push('/getting-started')
                } else {
                    history.push('/')
                }
                dispatch(hideLoading())
                dispatch(handleReceiveBookmarksData())
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
        localStorage.clear('persist:persistedStore', 'userId', 'token');
        history.push('/')
        dispatch(hideLoading())
        toastr.info(`you have logged out successfully`)
    }
}