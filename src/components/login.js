import React, { Component } from 'react';
import BackHeader from '../components/backheader';

class Login extends Component {
    state = {
        mobileNumber: '',
    }
    updateMobileNum = (e) => {
        this.setState((oldstate) => ({
            mobileNumber: e.target.value,
        }))
    }
    handleGetOTP = e => {
        e.preventDefault()

    }
    render() {
        return (
            <div>
                <BackHeader />
                <div className='container loginContainer'>
                    <form className='loginForm' onSubmit={this.handleGetOTP}>
                        <input
                            type='tel'
                            placeholder='Enter your mobile number'
                            value={this.state.mobileNumber}
                            onChange={(e) => this.updateMobileNum(e)}
                            className="validate"
                        />
                        <button className='waves-effect waves-light btn  blue accent-2'>Get OTP</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login