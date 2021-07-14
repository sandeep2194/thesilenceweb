import React, { Fragment, Component } from 'react'
import BackHeader from '../common/backheader'
import { Container, Row, Col } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
import { handleLogout } from '../../actions/authedUser'
import { connect } from 'react-redux';
import Spacer from '../common/Spacer'

class Settings extends Component {
    state = {
        options: [
            'Account', 'Choose Language', 'Choose Topic', 'Choose Location', 'Add Bank Details',
        ]
    }
    settingsTile = (option, index) => {
        return (
            <Row key={index} className='border-bottom pt-3 justify-content-start'>
                <Col className='p-0 m-0'>
                    <h6>{option}</h6>
                </Col>
                <Col xs={1}>
                    <Link to={`/settings/${option.replace(/ +/g, "")}`}>
                        <FeatherIcon icon='chevron-right' size='18' color='#7B8794' />
                    </Link>
                </Col>
            </Row>
        )
    }
    render() {
        const { dispatch } = this.props
        return (
            <Fragment  >
                <BackHeader pageName='Settings' />
                <Container>
                    <Row className='mt-4 justify-content-start'>
                        <Col>
                            <p>ACCOUNT SETTINGS</p>
                        </Col>
                        <Col lg={6} className='mx-3'>
                            {this.state.options.map((option, index) => (
                                this.settingsTile(option, index)
                            ))}
                            <Row className=' pt-3 justify-content-start'>
                                <Col className='p-0 m-0'>
                                    <h6>Stats & Payments</h6>
                                </Col>
                                <Col xs={1}>
                                    <Link to={`/settings/stats`}>
                                        <FeatherIcon icon='chevron-right' size='18' color='#7B8794' />
                                    </Link>
                                </Col>
                            </Row>
                            <Row className='border-bottom pt-5 justify-content-start'>
                                <Col className='p-0 m-0'>
                                    <h6 className='text-primary'>Support</h6>
                                </Col>
                                <Col xs={1}>
                                    <Link to={`/settings/support`}>
                                        <FeatherIcon icon='chevron-right' size='18' color='#7B8794' />
                                    </Link>

                                </Col>
                            </Row>
                            <Row className=' pt-3 justify-content-start'>
                                <Col className='p-0 m-0'>
                                    <h6 className='text-primary'>Logout</h6>
                                </Col>
                                <Col xs={1}>
                                    <FeatherIcon icon='chevron-right' size='18' color='#7B8794' onClick={() => dispatch(handleLogout())} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Spacer />
            </Fragment >

        )
    }
}

export default connect()(Settings)

