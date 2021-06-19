import React, { Fragment } from 'react';
import { Formik, useField, Form } from 'formik';
import { Row, Col, Button, Form as FormB, Container } from 'react-bootstrap'
import * as Yup from 'yup';
import { handleVerifyOtp } from '../actions/authedUser'
import { connect } from 'react-redux'
import CloseHeader from './closeBtnHeader'

const VerifyOtp = (props) => {
    const OtpInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <Col>
                <FormB.Control name="first" type="text" placeholder='0' {...field} {...props} className={meta.touched && meta.error ? 'is-invalid otp-input' : 'otp-input'} />
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    }
    const focusNext = (e) => {
        if (e.target.value.length == e.target.maxLength) {
            e.target.parentElement.nextSibling.getElementsByClassName("form-control")[0].focus()
        }
    }

    const { dispatch } = props
    const phoneNumber = props.location.state
    return (
        <Fragment>
            <CloseHeader />
            <Formik
                initialValues={{ first: '', second: '', third: '', fourth: '', }}
                validationSchema={Yup.object({
                    first: Yup.string()
                        .max(1, '')
                        .required('Required'),
                    second: Yup.string()
                        .max(1, '')
                        .required('Required'),
                    third: Yup.string()
                        .max(1, '')
                        .required('Required'),
                    fourth: Yup.string()
                        .max(1, '')
                        .required('Required'),
                })}

                onSubmit={(values, { setSubmitting }) => {
                    dispatch(handleVerifyOtp(phoneNumber, Object.values(values).join('')))
                    setSubmitting(false)
                }}

            >
                <Container>
                    <Row className='justify-content-center pt-5'>
                        <Col lg={5} xs={10}>
                            <Row >
                                <Col className='mb-5'>
                                    <Row className='justify-content-center'>
                                        <Col>
                                            <h3 className='font-weight-bold'>Welcome Login</h3>
                                            <span className='my-2'>Enter the 4-digit code to login</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Form>
                                <Row className='mt-2'>
                                    <OtpInput
                                        name="first"
                                        onKeyUp={focusNext}
                                        maxLength='1'
                                    />
                                    <OtpInput
                                        name="second"
                                        onKeyUp={focusNext}
                                        maxLength='1'

                                    />
                                    <OtpInput
                                        name="third"
                                        onKeyUp={focusNext}
                                        maxLength='1'

                                    />
                                    <OtpInput
                                        name="fourth"

                                    />
                                </Row>
                                <Row className='mt-4 mx-1'>
                                    <Button type="submit" size='sm' className="btn-block" >Login</Button>
                                </Row>
                                <Row className='mt-4 mx-1 justify-content-center'>
                                    <p className="resend pt-1">Didn’t receive the code?</p>
                                    <button type="button" className="btn btn-link btn-sm pb-5">Resend</button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </Formik>
        </Fragment >
    )
}

export default connect()(VerifyOtp)