import React, { Component, Fragment } from 'react'
import LogoHeader from '../common/logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BookmarksCard from '../common/bookmarksCard'
import ScrollMemory from '../common/scrollMemory'
import Spacer from '../common/Spacer'

class Bookmarks extends Component {
    render() {
        const { isLoggedIn, bookmarksData } = this.props
        return (
            <Fragment>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <LogoHeader pageName='Bookmarks' />
                <Container className='bg-light'>
                    <Row className='justify-content-center'>
                        <Col lg={6} className='mt-1 mx-2'>
                            <ul className='m-0'>
                                {bookmarksData.map((bookmark, index) => (
                                    <li key={index}>
                                        <BookmarksCard item={bookmark} />
                                    </li>
                                ))}
                                {
                                    bookmarksData.length === 0 &&
                                    <h4 className='text-center m-5'>No Bookmarks</h4>
                                }
                                <ScrollMemory name='bookmarksList' />
                            </ul>
                            <Spacer />
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
    const bookmarksArr = users[userId].bookmarks ? users[userId].bookmarks : []
    const bookmarksData = Object.values(news).filter((item) => bookmarksArr.includes(item._id))
    return {
        isLoggedIn: (token) ? true : false,
        bookmarksData,
    }
}
export default connect(mapStateToProps)(Bookmarks)