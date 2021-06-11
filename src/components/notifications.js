import React, { Component, Fragment } from 'react'
import NotificationItem from './notificationItem'
import LogoHeader from './logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

class Notification extends Component {
    render() {
        const { isLoggedIn } = this.props

        return (

            <Fragment>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <LogoHeader />
                <Container>
                    <Row className='justify-content-center mt-4'>
                        <Col lg={6}>
                            <NotificationItem />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
function mapStateToProps({ users }) {
    const token = localStorage.getItem('token')
    return {
        isLoggedIn: (token) ? true : false,
    }
}
export default connect(mapStateToProps)(Notification)