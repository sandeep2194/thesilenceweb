import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class NotificationItem extends Component {
    render() {
        const { message, pubDate, authorImage, authorName } = this.props.item
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NotificationItem