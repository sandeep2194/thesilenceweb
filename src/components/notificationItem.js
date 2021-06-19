import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

class NotificationItem extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Test</Card.Title>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NotificationItem