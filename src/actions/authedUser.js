import { getOtp, verifyOtp } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

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


export function handleGetOtp(phoneNumber) {
    return (dispatch) => {
        dispatch(showLoading())
        getOtp(phoneNumber)
            .then((res) => {
                console.log('otp sent', res.status)
                dispatch(hideLoading())
            })
            .catch((err) => {
                console.error(err)
            })
    }
}


export function handleVerifyOtp(phoneNumber, OTP, failCb) {
    return (dispatch) => {
        dispatch(showLoading())
        verifyOtp(phoneNumber, OTP)
            .then((res) => {
                localStorage.setItem('token', res.token);
                dispatch(login(res.userInfo))
                dispatch(hideLoading())
                history.push('/')
            }).catch((err) => {
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
    }
}