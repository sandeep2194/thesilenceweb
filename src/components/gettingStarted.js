import React, { Component, Fragment } from 'react';
import BackHeader from './backheader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

class GettingStarted extends Component {
    render() {
        return (
            <Fragment>
                <BackHeader pageName='Sign Up' />
                <Container>
                    <Row className='justify-content-center p-4'>
                        <Link to="/upload-profile-pic">
                            <PersonCircle size={76} className='control-icons' />
                        </Link>
                    </Row>
                    <Row className='mt-2 justify-content-center'>
                        <Col className='mx-3' lg={6}>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control type='text' placeholder='First Name' className='mb-4' />
                                    </Col>
                                    <Col>
                                        <Form.Control type='text' placeholder='Last Name' className='mb-4' />
                                    </Col>
                                </Row>
                                <Form.Control type='email' placeholder='Enter Email' className='mb-4' />
                                <Form.Control type='text' placeholder='Enter a username' className='mb-4' />
                                <Row className='px-3'>
                                    <Button type='submit' size='sm' className='btn-block'>Save</Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default GettingStarted