import React, { Fragment, useRef, useState, useEffect } from 'react';
import BackHeader from '../common/backheader'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import moment from 'moment';
import { DatePicker, TextInput, Select } from '../common/formFields'
import { handleUpdateUser } from '../../actions/authedUser'
import history from '../../utils/history'
import { toastr } from 'react-redux-toastr';
import { getAccountInfo } from '../../utils/api'
import Spacer from '../common/Spacer'

const Account = (props) => {
    const [bankAccount, setBankAccount] = useState('')
    const [ifsc, setIfsc] = useState('')
    useEffect(() => {
        getAccountInfo().then((data) => {
            const accountInfo = data.result
            setBankAccount(accountInfo.bankAccount)
            setIfsc(accountInfo.ifsc)
        }).catch((err) => { console.error(err) })
    }, [])
    const today = new Date()
    const maxDate = moment(today).subtract(13, 'years').format('YYYY-MM-DD');
    const { user, dispatch } = props;
    const { name, email, bio, gender } = user
    const userDob = moment(user.dob).format('YYYY-MM-DD')
    const formRef = useRef()
    const formikRef = useRef()
    const handleSave = () => {
        if (formikRef.current) {
            const { values } = formikRef.current
            dispatch(handleUpdateUser({
                email: values.email,
                name: values.name,
                gender: values.gender,
                dob: values.dob,
                bio: values.bio,
                bankAccount: values.bankAccount,
                ifsc: values.ifscCode,
            }))

            toastr.info('Account Details Saved')
            history.goBack()
        }
    };
    const handleSubmitThroughRef = () => {
        formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
        );
    };
    return (
        <Fragment  >
            <BackHeader pageName='Account'>
                <Button type="submit" size='sm' onClick={handleSubmitThroughRef} >Save</Button>
            </BackHeader>
            <Container>
                <Row>
                    <Col lg={6} className='mt-4'>
                        <Formik
                            enableReinitialize
                            innerRef={formikRef}
                            initialValues={{ name: name, email: email, bio: bio ? bio : '', bankAccount: bankAccount, ifscCode: ifsc, gender: gender, dob: user.dob ? userDob : maxDate }}
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
                                    .matches(/^[0-9]+$/, "Must be only digits")
                                    .required('Required'),
                                ifscCode: Yup.string()
                                    .required('Required')
                                ,
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

                            }}
                        >
                            <Form id='account-settings' ref={formRef}
                                onSubmit={handleSave}
                            >
                                <Row className='mt-4'>
                                    <TextInput
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <TextInput
                                        name="name"
                                        type="text"
                                        placeholder="first and last name"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <Select name="gender">
                                        <option value="" default >Select a Gender</option>
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
            <Spacer />
        </Fragment>

    )
}

function mapStateToProps({ users, drafts }) {
    const userId = localStorage.getItem('userId')
    return {
        user: users[userId],
    }
}

export default connect(mapStateToProps)(Account);