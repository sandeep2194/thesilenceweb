import React, { Component, Fragment } from 'react';
import BackHeader from '../components/backheader';
import { Form, Container, Button, Row, Col, Alert } from 'react-bootstrap'
import { handleGetOtp, handleVerifyOtp, } from '../actions/authedUser'
import { connect } from 'react-redux'
import { failedAlert } from '../actions/alerts'

class Login extends Component {
    state = {
        mobileNumber: '',
        otpSent: false,
        phoneValidated: false,
        otpValidated: false,
        OTP: '',
        invalidInput: false,
    }

    updateMobileNum = (e) => {
        e.preventDefault()
        e.target.className += " is-invalid"
        const input = e.target.value
        const check = /^\d{10}$/.test(input)
        this.setState(() => ({
            mobileNumber: input,
        }))
        if (check) {
            this.setState(() => ({
                phoneValidated: true,
            }))
        } else {
            this.setState(() => ({
                phoneValidated: false,
            }))
        }
    }

    updateOTP = (e) => {
        e.preventDefault()
        e.target.className += " is-invalid"
        const input = e.target.value
        const check = /^\d{4}$/.test(input)
        this.setState(() => ({
            OTP: input,
        }))
        if (check) {
            this.setState(() => ({
                otpValidated: true,
                invalidInput: false,
            }))
        } else {
            this.setState(() => ({
                otpValidated: false,
                invalidInput: true,
            }))
        }
    }

    handleGetOTP = e => {
        e.preventDefault()
        const { dispatch } = this.props
        const { mobileNumber, phoneValidated } = this.state
        if (phoneValidated) {
            dispatch(handleGetOtp(mobileNumber))
            this.setState(() => ({
                otpSent: true,
                invalidInput: false,

            }))
        } else {
            this.setState(() => ({
                invalidInput: true,
            }))
        }
    }
    handleVerifyOtp = e => {
        e.preventDefault()
        const { dispatch } = this.props
        const { mobileNumber, otpValidated, OTP } = this.state
        if (otpValidated) {
            dispatch(handleVerifyOtp(mobileNumber, OTP))
        }
    }

    onClose = () => {
        const { dispatch } = this.props
        this.setState({
            invalidInput: false,
        })
        dispatch(failedAlert(''))
    }
    render() {
        const {
            mobileNumber,
            otpValidated,
            phoneValidated,
            otpSent,
            OTP,
            invalidInput,

        } = this.state
        const { loginFailed } = this.props
        return (
            <Fragment>
                <BackHeader />
                {(invalidInput) ? <Alert dismissible variant='danger' onClose={this.onClose}>Incorrect Phone-Number/OTP</Alert> : null}
                {(loginFailed) ? <Alert dismissible variant='danger' onClose={this.onClose}>Login Failed Incorrect OTP</Alert> : null}
                <Container className='pt-5'>
                    <Row className='justify-content-center'>
                        <Col lg={3}></Col>
                        <Col>
                            {otpSent
                                ? <Form onSubmit={this.handleVerifyOtp}>
                                    <Form.Group className="mb-3" controlId="otp">
                                        <Form.Control type='text' placeholder='Enter OTP'
                                            value={OTP}
                                            onChange={this.updateOTP}
                                            className={!otpValidated ? '' : 'is-valid'}
                                        />
                                    </Form.Group>
                                    <Row className='justify-content-center'>
                                        <Button variant="primary" type="submit">
                                            Login
                                    </Button>
                                    </Row>
                                </Form>
                                : <Form onSubmit={this.handleGetOTP} >
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Phone Number'
                                            value={mobileNumber}
                                            onChange={this.updateMobileNum}
                                            className={!phoneValidated ? '' : 'is-valid'}
                                        />
                                    </Form.Group>
                                    <Row className='justify-content-center'>
                                        <Button variant="primary" type="submit">
                                            Get Otp
                                     </Button>
                                    </Row>
                                </Form>}
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
function mapState({ alerts }) {
    if (alerts === 'Incorrect OTP') {
        return {
            loginFailed: true,
        }
    } else return {
        loginFailed: false,
    }
}
export default connect(mapState)(Login)