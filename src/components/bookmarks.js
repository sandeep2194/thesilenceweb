import React, { Component, Fragment } from 'react'
import LogoHeader from './logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Card, Row, Button, Col } from 'react-bootstrap'
import { TrashFill } from 'react-bootstrap-icons'

class Bookmarks extends Component {

    render() {
        const { isLoggedIn, bookmarksData } = this.props
        return (
            <Fragment>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <LogoHeader />
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <ul>
                                {bookmarksData.map((bookmark, index) => (
                                    <li key={index}>                <Card className='mt-3'>
                                        <Card.Img src={bookmark.imageUrl} />
                                        <Card.Body className='mb-2'>
                                            <Card.Title className='mb-0'>{bookmark.title}</Card.Title>

                                        </Card.Body>
                                        <Row className='justify-content-start mx-3 mb-4'>
                                            <Button type='button' size='sm' variant='outline-secondary'>
                                                <TrashFill size={16} />
                                                Delete
                                            </Button>
                                        </Row>
                                    </Card></li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser }) {
    const token = localStorage.getItem('token')
    const bookmarksData = authedUser.bookmarksData
    return {
        isLoggedIn: (token) ? true : false,
        bookmarksData,
    }
}
export default connect(mapStateToProps)(Bookmarks)