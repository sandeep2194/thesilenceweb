import { getOtp, verifyOtp } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'
import { toastr } from 'react-redux-toastr'

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
                dispatch(hideLoading())
                toastr.success('OTP Sent', 'you shall receive it shortly')
            })
            .catch((err) => {
                toastr.error('Error sending OTP', 'please try again later.')
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