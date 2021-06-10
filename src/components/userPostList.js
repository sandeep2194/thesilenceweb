import React from 'react'
import { PenFill, TrashFill } from 'react-bootstrap-icons'
import { Card, Col, Row } from 'react-bootstrap'

function userPostList(props) {
    const { user, isCurrentUser } = props
    return <ul>
        {(user.news) ? user.news.map((n, i) => (
            <li key={i}>
                <Card className='mt-3'>
                    <Card.Img src={n.imageUrl} />
                    <Card.Body className='mb-2'>
                        <Card.Title className='mb-0'>{n.title}</Card.Title>
                    </Card.Body>
                    {isCurrentUser &&
                        <Row className='justify-content-center p-2'>
                            <Col>
                                <Row className='justify-content-center '>
                                    <PenFill size={16} className='control-icons mr-1' /> <p className='profile-meta'>Edit</p>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='justify-content-center'>
                                    <TrashFill size={16} className='control-icons mr-1' />
                                    <p className='profile-meta'>Delete</p>
                                </Row>

                            </Col>
                        </Row>}
                </Card>
            </li>
        )) : null}
    </ul>
}

export default userPostList