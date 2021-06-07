import React, { Component, Fragment } from 'react';
import BackHeader from '../components/backheader';
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { handleVerifyOtp, } from '../actions/authedUser'
import { connect } from 'react-redux'

class VerifyOtp extends Component {
    state = {
        otpValidated: false,
        OTP: '',
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
            }))
        } else {
            this.setState(() => ({
                otpValidated: false,
            }))
        }
    }

    handleVerifyOtp = e => {
        e.preventDefault()
        const { dispatch } = this.props
        const { mobileNumber } = this.props.location
        const { otpValidated, OTP } = this.state
        if (otpValidated) {
            dispatch(handleVerifyOtp(mobileNumber, OTP))
        }
    }


    render() {
        const {
            otpValidated,
            OTP,
        } = this.state
        return (
            <Fragment>
                <BackHeader />
                <Container className='pt-5'>
                    <Row className='justify-content-center'>
                        <Col lg={3}></Col>
                        <Col>
                            <Form onSubmit={this.handleVerifyOtp}>
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
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(VerifyOtp)