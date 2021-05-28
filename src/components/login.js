import React, { Component, Fragment } from 'react';
import BackHeader from '../components/backheader';
import LoginWithGoogle from './googleLogin'

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
                <div style={{
                    margin: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh'
                }}>
                    <LoginWithGoogle />
                </div>
            </Fragment>
        )
    }
}


export default Login