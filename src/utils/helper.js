
import { toastr } from 'react-redux-toastr'

export const CheckError = (e) => {
    const token = localStorage.getItem('token')
    if (e.message.includes('403') && token === 'undefined') {
        toastr.info('please login again - session expired!')
    }
}