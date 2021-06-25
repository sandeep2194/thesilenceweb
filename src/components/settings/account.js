import React, { Fragment } from 'react';
import BackHeader from '../common/backheader'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import moment from 'moment';
import { DatePicker, TextInput, Select } from '../common/formFields'

const Account = (props) => {

    const today = new Date()
    const maxDate = moment(today).subtract(13, 'years').format('YYYY-MM-DD');

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
                            initialValues={{ email: email, mobileNumber: phone, bio: bio ? bio : '', bankAccount: accountNumber, ifscCode: ifscCode, gender: gender, dob: user.dob ? userDob : maxDate }}
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
                                    <TextInput
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <TextInput
                                        name="mobileNumber"
                                        type="text"
                                        placeholder="mobile number"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <Select name="gender">
                                        <option value="" default>Select a Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </Row>
                                <Row className='mt-4'>
                                    <DatePicker name='dob' label='Date of Birth' />
                                </Row>
                                <Row className='mt-4'>
                                    <TextInput
                                        name="bio"
                                        type="text"
                                        placeholder="bio"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <TextInput
                                        name="bankAccount"
                                        type="text"
                                        placeholder="Account Number"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <TextInput
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

function mapStateToProps({ users }) {
    const userId = localStorage.getItem('userId')
    return {
        user: users[userId]
    }
}

export default connect(mapStateToProps)(Account);