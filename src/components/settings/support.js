import React, { Fragment } from 'react'
import BackHeader from '../common/backheader'
import { Formik, useField, Form } from 'formik';
import { Container, Row, Col, Button, Form as FormB } from 'react-bootstrap'
import * as Yup from 'yup';
import Spacer from '../common/Spacer'

const SupportForm = (props) => {
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <Col>
                <FormB.Control name="message" as="textarea" placeholder='Please write your complaint/suggestion here' type="text" {...field} {...props} className={meta.touched && meta.error ? 'is-invalid' : ''} />
                {meta.touched && meta.error ? (
                    <div className="invalid-feedback">
                        {meta.error}
                    </div>
                ) : null}
            </Col>
        );
    };
    return (
        <Fragment>
            <BackHeader pageName='Support' />
            <Container>

                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <Formik
                            initialValues={{ message: '' }}
                            validationSchema={
                                Yup.object(
                                    {
                                        message: Yup.string()
                                            .required('Required')
                                            .max(3000, 'Cannot be more than 3000 characters')
                                    }
                                )}
                            onSubmit={(values, { setSubmitting }) => {
                                alert('submit hua')
                                setSubmitting(false)
                            }}
                        >
                            <Form>
                                <Row className='mt-4'>
                                    <MyTextArea
                                        name="message"
                                    />
                                </Row>
                                <Row className='mt-4'>
                                    <Button type='submit' size='sm' className='btn-block  mx-3' >
                                        Submit
                                    </Button>
                                </Row>
                            </Form>
                        </Formik>
                    </Col>

                </Row>
            </Container>
            <Spacer />
        </Fragment >
    )
}

export default SupportForm