import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import moment from 'moment';

class NotificationItem extends Component {
    render() {
        const { message, pubDate, authorImage, authorName } = this.props.item
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col sm={2} xs={1}>
                                    <Image src={authorImage} className="rounded-circle" alt={authorName}
                                        height={32} width={32}
                                    />
                                </Col>
                                <Col>
                                    <Row>
                                        <h5>{authorName + ' ' + message}</h5>
                                    </Row>
                                    <Row>
                                        <span className='meta'>{moment.unix(pubDate).format("DD/MM/YYYY")}</span>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NotificationItem