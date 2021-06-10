import React, { Fragment } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Calendar2 } from 'react-bootstrap-icons'
import moment from 'moment';

function userInfoProfile(props) {
    const { user, isCurrentUser } = props
    return (
        <Fragment>
            <Row className='justify-content-center'>
                <Col lg={6} className='border-bottom'>
                    <Row className='mt-4'>
                        <Col xs={8} lg={10}>
                            <Image src={user.profilePic} roundedCircle width={48} height={48} />
                        </Col>
                        <Col xs={1} lg={2} >
                            {(isCurrentUser) ? <Button size='sm' variant="outline-primary" className='mt-1'>
                                Edit Profile
                            </Button>
                                : <Button size='sm' variant="outline-primary" className='mt-1'>
                                    Follow
                        </Button>
                            }
                        </Col>
                    </Row >
                    <Row className='mt-2'>
                        <Col>
                            <h5 className='font-weight-bold'>{user.name}</h5>
                            <p>@{user.username}</p>
                            <p style={{ fontSize: '.65rem' }}><Calendar2 size={13} className='mr-1' />Joined {moment(user._created_at).format('MMM/YYYY')}</p>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <Row className='justify-content-center mt-3' >
                <Col lg={6} className='border-bottom'>
                    <Row className='ml-1'>
                        <Col xs={3} lg={2}>
                            <Row className='justify-content-start'>
                                <p className='profile-meta'>{user.followCount}</p>
                                <p className='profile-meta ml-1'> Followers</p>
                            </Row>
                        </Col>
                        <Col xs={3} lg={2}>
                            <Row className='justify-content-start'>
                                <p className='profile-meta'>{user.followingCount}</p>
                                <p className='profile-meta ml-1'>Following</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default userInfoProfile