import React, { Fragment } from 'react';
import { Formik, Form } from 'formik';
import { Container, Row, Col, Button } from 'react-bootstrap'
import * as Yup from 'yup';
import { userNameValidation } from '../../utils/api'
import { handleUpdateUser } from '../../actions/authedUser'
import { connect } from 'react-redux'
import { TextInput, DatePicker } from '../common/formFields';
import moment from 'moment';


const PersonalDetails = (props) => {
    const { dispatch } = props
    const today = new Date()
    const maxDate = moment(today).subtract(13, 'years').format('YYYY-MM-DD');
    return (

        <Fragment>
            <Container className='my-5'>
                <Row className='mt-2 justify-content-center'>
                    <Col className='mx-3' lg={6}>
                        <Formik
                            initialValues={{ username: '', dob: maxDate, bio: '' }}
                            validationSchema={Yup.object({
                                bio: Yup.string()
                                    .min(200, 'Must be 200 characters or more')
                                    .required('Required'),
                                dob: Yup.date()
                                    .max(maxDate, ''),
                                username: Yup.string()
                                    .min(4, 'Too short, minimum 2 characters')
                                    .max(15, 'Too long, maximum 50 characters')
                                    .required('Required')
                                    .test(
                                        'username-backend-validation',  // Name
                                        'Username taken',               // Msg
                                        async (username) => {
                                            if (username) {
                                                if ([...username].length >= 4) {
                                                    const data = await userNameValidation(username)
                                                    return data.result
                                                }
                                            }
                                        }
                                    )
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                dispatch(handleUpdateUser({
                                    name: `${values.firstName} ${values.lastName}`,
                                    username: values.username,
                                    email: values.email,
                                }))
                                setSubmitting(false)
                            }}
                        >

                            <Form>
                                <Row className='mt-3'>
                                    <TextInput
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                    />
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
                                <Row className='mt-4 mx-1'>
                                    <Button type="submit" size='sm' className="btn-block" >Save</Button>
                                </Row>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}

export default connect()(PersonalDetails)