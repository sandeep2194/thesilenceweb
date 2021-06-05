import { getOtp, verifyOtp } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'
import { successAlert, failedAlert } from './alerts'

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
                console.log('otp sent')
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
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    dispatch(login(res.userInfo))
                    dispatch(hideLoading())
                    history.push('/')
                    dispatch(successAlert('Login Successful'))
                } else {
                    dispatch(failedAlert('Incorrect OTP'))
                }
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