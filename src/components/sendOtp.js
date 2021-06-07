import React, { Component, Fragment } from 'react';
import BackHeader from '../components/backheader';
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
                <BackHeader />
                <Container className='pt-5'>
                    <Row className='justify-content-center'>
                        <Col lg={3}></Col>
                        <Col>
                            <Form onSubmit={this.handleGetOTP} >
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
                            </Form>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(SendOtp)