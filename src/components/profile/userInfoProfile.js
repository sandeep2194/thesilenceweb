import React, { Fragment, useState } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import moment from 'moment';
import defaultUserPic from '../../assets/images/user.svg';
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux';
import { handleFollow } from '../../actions/user'
import RevivoModal from './modals';
import SmallUserCard from './smallUserCard'
import { handleAddFollowersData, handleAddFollowingData } from '../../actions/user'

const UserInfoProfile = (props) => {
    const [showM1, setShowM1] = useState(false);
    const [showM2, setShowM2] = useState(false);
    const handleClose1 = () => setShowM1(false);
    const handleClose2 = () => setShowM2(false);
    const { dispatch, user } = props
    const { _id } = user
    const handleShow1 = () => {
        dispatch(handleAddFollowersData(_id))
        setShowM1(true)
    }
    const handleShow2 = () => {
        dispatch(handleAddFollowingData(_id))
        setShowM2(true)
    }

    const handleFollowHere = () => {
        dispatch(handleFollow(_id))
    }
    const { isCurrentUser, followedByCurrentUser } = props
    const { followingData, followersData, followers, following } = user
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
                                        <Button size='sm' variant="outline-primary" className='mt-1'
                                            onClick={handleFollowHere}
                                        >
                                            {followedByCurrentUser ? 'Unfollow' : 'Follow'}
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
                            </span> {user.locations ? user.locations[0] : 'New Delhi, India'}</p>
                            <p className='font-weight-bold mt-1 m-0 pl-1' style={{ fontSize: '12px', color: '#828282' }}>
                                <span>
                                    <FeatherIcon icon='calendar' color='#828282' size='14'
                                        className='mr-1 mb-1' />
                                </span>{'Born  '}
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
                                        <h4>{user.posts ? user.posts : 0}</h4>

                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'> Stories</p>

                                    </Row>
                                </Col>
                                <Col onClick={handleShow1} className='pointer'>
                                    <Row className='justify-content-center'>
                                        <h4>{user.followers}</h4>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'> Followers</p>

                                    </Row>
                                </Col>
                                <Col onClick={handleShow2} className='pointer'>
                                    <Row className='justify-content-center'>
                                        <h4>{user.following ? user.following : '0'}</h4>

                                    </Row>
                                    <Row className='justify-content-center'>
                                        <p className='profile-meta'>Following</p>

                                    </Row>
                                </Col>

                                <Col>
                                    <Row className='justify-content-center'>
                                        <h4>{user.causes ? user.causes : "0"}</h4>

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
            <RevivoModal show={showM1} heading='Followers' handleClose={handleClose1}>
                {
                    followers > 0 ?
                        followersData.map((u, i) => (
                            <SmallUserCard currentCardUserId={u} key={i} />
                        ))
                        : <h6>No followers</h6>
                }
            </RevivoModal>
            <RevivoModal show={showM2} heading='Following' handleClose={handleClose2}>
                {
                    following > 0 ?
                        followingData.map((u, i) => (
                            <SmallUserCard currentCardUserId={u} key={i} />
                        ))
                        : <h6>No one following</h6>
                }
            </RevivoModal>
        </Fragment >
    )
}

export default connect()(UserInfoProfile)