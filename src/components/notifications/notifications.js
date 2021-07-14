import React, { Component, Fragment } from 'react'
import NotificationItem from './notificationItem'
import LogoHeader from '../common/logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Spacer from '../common/Spacer';

class Notification extends Component {
    state = {
        results: [],
    }
    componentDidMount() {
        //fetch notifications from api and show
    }
    render() {
        const { isLoggedIn } = this.props
        const { results } = this.state
        return (

            <Fragment>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <LogoHeader pageName='Notifications' />
                <Container>
                    <Row className='justify-content-center mt-4'>
                        <Col lg={6}>
                            {
                                results.map((r) => <NotificationItem item={r} />)
                            }
                            {
                                results.length === 0 &&
                                <h4 className='text-center m-5'>No Notifications</h4>
                            }
                        </Col>
                    </Row>
                </Container>
                <Spacer />
            </Fragment>
        )
    }
}
function mapStateToProps() {
    const token = localStorage.getItem('token')
    return {
        isLoggedIn: (token) ? true : false,
    }
}
export default connect(mapStateToProps)(Notification)