import { getOtp, verifyOtp } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../utils/history'
import { toastr } from 'react-redux-toastr'
import { addUser } from './user'

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
                const firstTimeUser = res.userInfo.firstTimeUser
                localStorage.setItem('token', res.token);
                dispatch(login(res.userInfo))
                dispatch(addUser(res.userInfo))
                dispatch(hideLoading())
                if (firstTimeUser) {
                    history.push('/getting-started')
                } {
                    history.push('/getting-started')
                }
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