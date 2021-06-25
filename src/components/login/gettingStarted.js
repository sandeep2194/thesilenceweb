import React, { Component, Fragment } from 'react';
import BackHeader from '../common/backheader'
import { Container, Row, Col } from 'react-bootstrap'
import GettingStartedForm from './gettingStartedForm'

class GettingStarted extends Component {

    render() {
        return (
            <Fragment>
                <BackHeader pageName='Sign Up' />
                <Container>
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