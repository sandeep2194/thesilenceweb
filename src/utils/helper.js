
import history from '../utils/history'
import { toastr } from 'react-redux-toastr'

export const CheckError = (e) => {
    if (e.message.includes('403')) {
        history.push('/send-otp')
        toastr.info('please login again - session expired!')
    }
}