import React, { Component, Fragment } from 'react'
import LogoHeader from './logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BookmarksCard from './bookmarksCard'
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

function mapStateToProps({ authedUser }, props) {
    const token = localStorage.getItem('token')
    const bookmarksData = authedUser.bookmarksData
    return {
        isLoggedIn: (token) ? true : false,
        bookmarksData,
    }
}
export default connect(mapStateToProps)(Bookmarks)