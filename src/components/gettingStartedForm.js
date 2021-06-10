import React from 'react';
import { Formik, useField, Form } from 'formik';
import { Row, Col, Button, Form as FormB } from 'react-bootstrap'
import * as Yup from 'yup';
import { userNameValidation } from '../utils/api'
import { handleUpdateUser } from '../actions/authedUser'
import { connect } from 'react-redux'

const GettingStartedForm = (props) => {
    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <Col>
                <FormB.Control name="firstName" type="text" placeholder='First Name' {...field} {...props} className={meta.touched && meta.error ? 'is-invalid' : ''} />
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    };
    const { dispatch } = props
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', username: '', }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
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
                <Row className='mt-2'>
                    <MyTextInput
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <MyTextInput
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                </Row>
                <Row className='mt-3'>
                    <MyTextInput
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </Row>
                <Row className='mt-3'>
                    <MyTextInput
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                </Row>
                <Row className='mt-4 mx-1'>
                    <Button type="submit" size='sm' className="btn-block" >Save</Button>
                </Row>
            </Form>
        </Formik>
    )
}

export default connect()(GettingStartedForm)