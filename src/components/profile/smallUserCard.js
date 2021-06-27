import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { handleFollow } from '../../actions/user'
import { connect } from 'react-redux'

const SmallUserCard = (props) => {
    const handleFollowHere = () => {
        const { dispatch, user } = props
        const { _id } = user
        dispatch(handleFollow(_id))
    }
    const { user, followedByThisUser, isLoggedInUser } = props
    return (
        <Container className='my-2 border-bottom border-light py-3'>
            <Row>
                <Col xs={1}>
                    <Row className='justify-content-start'>
                        <Image src={user.profilePic} alt={'user pic'} roundedCircle height={36} width={36} className='border border-secondary' />
                    </Row>
                </Col>
                <Col>
                    <Row className='justify-content-start align-items-center'>
                        <span className='mt-1 ml-3'>{'@' + user.username}</span>
                    </Row>
                </Col>
                {
                    !isLoggedInUser &&
                    <Col>
                        <Row className='justify-content-end'>
                            <Button size='sm' variant="outline-primary" className='mt-1'
                                onClick={handleFollowHere}
                            >
                                {followedByThisUser ? 'Unfollow' : 'Follow'}
                            </Button>
                        </Row>
                    </Col>
                }
            </Row>
        </Container>
    )
}
function mapStateToProps({ users }, props) {
    const userId = localStorage.getItem('userId')
    const { currentCardUserId } = props
    const isLoggedInUser = userId === currentCardUserId
    return {
        user: users[currentCardUserId],
        followedByThisUser: users[currentCardUserId].loggedInUserFollowsThisUser,
        isLoggedInUser,
    }
}
export default connect(mapStateToProps)(SmallUserCard)