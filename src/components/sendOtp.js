import React, { Component, Fragment } from 'react';
import CloseHeader from './closeBtnHeader'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { handleGetOtp } from '../actions/authedUser'
import { connect } from 'react-redux'

class SendOtp extends Component {
    state = {
        mobileNumber: '',
        phoneValidated: false,
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

    handleGetOTP = e => {
        e.preventDefault()
        const { dispatch } = this.props
        const { mobileNumber, phoneValidated } = this.state
        if (phoneValidated) {
            dispatch(handleGetOtp(mobileNumber))
            this.setState(() => ({
                otpSent: true,
            }))
        }
    }


    render() {
        const {
            mobileNumber,
            phoneValidated,
        } = this.state
        return (
            <Fragment>
                <CloseHeader />
                <Container className='pt-5 mt-5'>

                    <Row className='justify-content-center'>
                        <Col className='mx-3' lg={6}>
                            <Row>
                                <Col className='mb-5'>
                                    <h3 className='font-weight-bold'>Sign Up / Login</h3>
                                    <span className='my-2'>Enter your phone number to sign up/Login</span>
                                </Col>
                            </Row>
                            <Form onSubmit={this.handleGetOTP} >
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Control
                                        type='text'
                                        value={mobileNumber}
                                        onChange={this.updateMobileNum}
                                        className={!phoneValidated ? '' : 'is-valid'}
                                        placeholder='Enter phone number'
                                    />
                                </Form.Group>
                                <Row className='justify-content-center'>
                                    <Button variant="primary" type="submit" size='md' className='btn-block mx-3 mt-3'>
                                        Continue
                                    </Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(SendOtp)