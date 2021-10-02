
import { toastr } from 'react-redux-toastr'
import history from '../utils/history'

export const CheckError = (e) => {
    const token = localStorage.getItem('token')
    if (e.message.includes('403') && token) {
        history.push('/send-otp')
        toastr.info('please login again - session expired!')
    }
}