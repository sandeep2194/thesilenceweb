import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

class NotificationItem extends Component {
    render() {
        return (
            <Fragment>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        <Card.Text>
                            {content}
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default NotificationItem