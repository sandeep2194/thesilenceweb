import React, { Fragment } from 'react';
import BackHeader from '../backheader'
import { Container, Row, Col, Button, Form as FormB } from 'react-bootstrap'
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import moment from 'moment';

const Account = (props) => {
    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <Col>
                <FormB.Control name="bio" type="text" placeholder='Bio' {...field} {...props} className={meta.touched && meta.error ? 'is-invalid' : ''} />
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    };
    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <Col>
                <select  {...field} {...props} className="form-control" />
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    };
    const today = new Date()
    const maxDate = moment(today).subtract(13, 'years').format('YYYY-MM-DD');

    const MyDatePicker = ({ label, ...props }) => {
        const [field, meta] = useField(props);

        return (
            <Col>
                <FormB.Group controlId="dob">
                    <FormB.Label>{label}</FormB.Label>
                    <FormB.Control type="date" name="dob" placeholder="Date of Birth" {...field} {...props}
                    />
                </FormB.Group>
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    };
    const { user } = props;
    const { email, phone, bio, accountNumber, ifscCode, gender } = user
    const userDob = moment(user.dob).format('YYYY-MM-DD')

    return (
        <Fragment  >
            <BackHeader pageName='Account'>
                <Button type="submit" size='sm' form='account-settings'>Save</Button>
            </BackHeader>
            <Container>
                <Row>
                    <Col lg={6} className='mt-4'>
                        <Formik
                            initialValues={{ email: email, mobileNumber: phone, bio: bio, bankAccount: accountNumber, ifscCode: ifscCode, gender: gender, dob: user.dob ? userDob : maxDate }}
                            validationSchema={Yup.object({
                                mobileNumber: Yup.string()
                                    .max(10, 'Must be 10 digits or less')
                                    .required('Required')
                                    .matches(/^[0-9]+$/, "Must be only digits"),
                                bio: Yup.string()
                                    .max(150, 'Must be 150 characters or less')
                                    .required('Required'),
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                                bankAccount: Yup.string()
                                    .matches(/^[0-9]+$/, "Must be only digits"),
                                ifscCode: Yup.string(),
                                gender: Yup.string()
                                    .oneOf(
                                        ['male', 'female', 'other'],
                                        'Invalid Gender'
                                    )
                                    .required('Required'),
                                dob: Yup.date()
                                    .max(maxDate, '')
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                alert('submit hua')
                                setSubmitting(false)
                            }}
                        >
                            <Form id='account-settings'>
                                <Row className='mt-4'>
                                    <MyTextInput
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <MyTextInput
                                        name="mobileNumber"
                                        type="text"
                                        placeholder="mobile number"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <MySelect name="gender">
                                        <option value="" default>Select a Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </MySelect>
                                </Row>
                                <Row className='mt-4'>
                                    <MyDatePicker name='dob' label='Date of Birth' />
                                </Row>
                                <Row className='mt-4'>
                                    <MyTextInput
                                        name="bio"
                                        type="text"
                                        placeholder="bio"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <MyTextInput
                                        name="bankAccount"
                                        type="text"
                                        placeholder="Account Number"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <MyTextInput
                                        name="ifscCode"
                                        type="text"
                                        placeholder="IFSC Code"
                                    />
                                </Row>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}

function mapStateToProps({ authedUser }) {
    return {
        user: authedUser
    }
}

export default connect(mapStateToProps)(Account);