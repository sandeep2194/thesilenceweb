import React, { Fragment, useEffect } from 'react';
import { Formik, useField, Form, useFormikContext } from 'formik';
import { Row, Col, Button, Form as FormB, Container } from 'react-bootstrap'
import * as Yup from 'yup';
import { handleVerifyOtp } from '../../actions/authedUser'
import { connect } from 'react-redux'
import CloseHeader from '../common/closeBtnHeader'
import { handleGetOtp } from '../../actions/authedUser'
import { toastr } from 'react-redux-toastr'
import Spacer from '../common/Spacer'

const VerifyOtp = (props) => {
    useEffect(() => {
        // Update the document title using the browser API
        const el = document.getElementById('first')
        el.focus()
    }, []);
    const OtpInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        const { values, submitForm } = useFormikContext()
        return (
            <Col>
                <FormB.Control name="first" type="text" placeholder='' {...field} {...props} className={meta.touched && meta.error ? 'is-invalid otp-input' : 'otp-input'}
                    onKeyUp={(e) => {
                        if (values.fourth !== 1) {
                            focusNext(e)
                        }
                        if (values.fourth.length === 1) {
                            submitForm()
                        }
                    }}
                />
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    }
    const focusNext = (e) => {
        if (e.target.value.length === e.target.maxLength) {
            e.target.parentElement.nextSibling.getElementsByClassName("form-control")[0].focus()
        }
    }
    const { dispatch } = props
    const phoneNumber = props.location.state


    return (
        <Fragment>
            <CloseHeader />
            <Formik
                initialValues={{ first: '', second: '', third: '', fourth: '' }}
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
                                        maxLength='1'
                                        id='first'
                                    />
                                    <OtpInput
                                        name="second"
                                        maxLength='1'

                                    />
                                    <OtpInput
                                        name="third"
                                        maxLength='1'

                                    />
                                    <OtpInput
                                        name="fourth"
                                    />
                                </Row>
                                <Row className='mt-4 mx-1'>
                                    <Button size='sm' className="btn-block" >Login</Button>
                                </Row>
                                <Row className='mt-4 mx-1 justify-content-center'>
                                    <p className="resend pt-1">Didn’t receive the code?</p>
                                    <button type="button" className="btn btn-link btn-sm mb-4"
                                        onClick={() => {
                                            dispatch(handleGetOtp(phoneNumber))
                                            toastr.info('Otp resent')
                                        }}
                                    >Resend</button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Formik>
            <Spacer />
        </Fragment >
    )
}

export default connect()(VerifyOtp)