import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function CommentTile(props) {
    return (
        <Container className='border-bottom'>
            <Row className='my-3'>
                <Col className='justify-content-center'>
                    <span>{props.content}</span>
                </Col>
            </Row>
        </Container>
    )
}

export default CommentTile