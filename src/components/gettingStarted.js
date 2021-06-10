import React, { Component, Fragment } from 'react';
import BackHeader from './backheader'
import { Container, Row, Col } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import GettingStartedForm from './gettingStartedForm'

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
                            <GettingStartedForm />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default GettingStarted