import { getOtp, verifyOtp } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'
import { dismiss, update, error, message, warning, success, info } from 'react-toastify-redux';

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
            .then(() => {
                dispatch(info("OTP Sent"))
                dispatch(hideLoading())
            })
            .catch((err) => {
                dispatch(error("Error to send OTP"))
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
                dispatch(error("Error to verify OTP"))
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