import React, { Component, Fragment } from 'react'
import LogoHeader from '../common/logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BookmarksCard from '../common/bookmarksCard'

class Bookmarks extends Component {

    render() {
        const { isLoggedIn, bookmarksData } = this.props
        return (
            <Fragment>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <LogoHeader pageName='Bookmarks' />
                <Container className='bg-light'>
                    <Row className='justify-content-center'>
                        <Col lg={6} className='mt-3'>
                            <ul>
                                {bookmarksData.map((bookmark, index) => (
                                    <li key={index}>
                                        <BookmarksCard item={bookmark} />
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ news, users }) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const bookmarksArr = users[userId].bookmarks
    const bookmarksData = Object.values(news).filter((item) => bookmarksArr.includes(item._id))
    return {
        isLoggedIn: (token) ? true : false,
        bookmarksData,
    }
}
export default connect(mapStateToProps)(Bookmarks)