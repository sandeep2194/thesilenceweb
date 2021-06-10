import React from 'react';
import { Formik, useField, Form } from 'formik';
import { Row, Col, Button, Form as FormB } from 'react-bootstrap'
import * as Yup from 'yup';

const GettingStartedForm = () => {
    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <Col>
                <FormB.Control name="firstName" type="text" placeholder='First Name' {...field} {...props} className={meta.touched && meta.error ? 'is-invalid' : ''} />
                {meta.touched && meta.error ? (
                    <div class="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    };
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
                username: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >

            <Form>
                <Row className='mt-2 mx-1'>
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
                <Row className='mt-3 mx-1'>
                    <MyTextInput
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </Row>
                <Row className='mt-3 mx-1'>
                    <MyTextInput
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                </Row>
                <Row className='mt-4 mx-3'>
                    <Button type="submit" size='sm' className="btn-block">Save</Button>
                </Row>
            </Form>
        </Formik>
    )
}

export default GettingStartedForm