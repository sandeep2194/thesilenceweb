import React, { Component, Fragment } from 'react';
import BackHeader from '../components/backheader';
// import LoginWithGoogle from './googleLogin'
class Login extends Component {
    state = {
        mobileNumber: '',
    }
    updateMobileNum = (e) => {
        this.setState(() => ({
            mobileNumber: e.target.value,
        }))
    }
    handleGetOTP = e => {
        e.preventDefault()

    }
    render() {
        return (
            <Fragment>
                <BackHeader />
            </Fragment>
        )
    }
}


export default Login