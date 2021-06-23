import React, { Fragment } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import moment from 'moment';
import defaultUserPic from '../../assets/images/user.svg';
import FeatherIcon from 'feather-icons-react';


function userInfoProfile(props) {
    const { user, isCurrentUser } = props
    return (
        <Fragment>
            <Row className='justify-content-center align-items-center'>
                <Col lg={6} >
                    <Row>
                        <Col className='ml-3'>
                            <Row className='mt-3 pb-3'>
                                {user.profilePic
                                    ? <Image src={user.profilePic} roundedCircle width={48} height={48} className='border border-secondary' />
                                    : <Image src={defaultUserPic} roundedCircle width={48} height={48} />
                                }
                                <Col className='mt-1 m-0 p-0 ml-2'>
                                    <h6 className='font-weight-bold m-0'>{user.name}</h6>
                                    <p className='m-0' style={{ fontSize: '12px' }}>@{user.username}</p>
                                </Col>
                                <Col xs={4} lg={2}>
                                    {!isCurrentUser &&
                                        <Button size='sm' variant="outline-primary" className='mt-1'>
                                            Follow
                                        </Button>
                                    }
                                </Col>
                            </Row >
                        </Col>
                    </Row>
                    <Row>
                        <Col className='ml-1'>
                            <p style={{ fontSize: '14px' }} className='mt-1 pl-1 pb-2 m-0 '>{user.bio ? user.bio : 'Hi, I am a here to read some news'}</p>
                            <p className='font-weight-bold mt-1 m-0 pb-1 pl-1' style={{ fontSize: '12px', color: '#2F80ED' }}><span>
                                <FeatherIcon icon='map-pin' color='#2F80ED' size='14' />
                            </span> {user.city ? user.city + ' ' + user.country : 'New Delhi, India'}</p>
                            <p className='font-weight-bold mt-1 m-0 pl-1' style={{ fontSize: '12px', color: '#828282' }}>
                                <span>
                                    <FeatherIcon icon='calendar' color='#828282' size='14'
                                        className='mr-1 mb-1' />
                                </span>Born
                                {
                                    user.dob
                                        ? moment(user.dob).format('MMM/YYYY')
                                        : 'DOB'
                                }
                            </p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4 border-top pt-3' >
                        <Col>
                            <Row className=''>
                                <Col className='p-0'>
                                    <Row className='justify-content-center'>
                                        <h4>{user.news && user.news.length ? user.news.length : "0"}</h4>

                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'> Stories</p>

                                    </Row>
                                </Col>
                                <Col>
                                    <Row className='justify-content-center'>
                                        <h4>{user.followers ? user.followers : "0"}</h4>

                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'> Followers</p>

                                    </Row>
                                </Col>
                                <Col>
                                    <Row className='justify-content-center'>
                                        <h4>{user.following ? user.following : '0'}</h4>

                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'>Following</p>

                                    </Row>
                                </Col>

                                <Col>
                                    <Row className='justify-content-center'>
                                        <h4>{user.causesCount ? user.causesCount : "0"}</h4>

                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'> Causes</p>

                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment >
    )
}

export default userInfoProfile