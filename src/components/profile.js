import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import BackHeader from './backheader'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { handleReceiveNews } from '../actions/user'
import UserPostList from './userPostList'
import UserInfoProfile from './userInfoProfile'

class Profile extends Component {
    componentDidMount() {
        const { dispatch, pageNo, pageSize, userId } = this.props
        if (pageNo === 1) {
            dispatch(handleReceiveNews(userId, pageNo, pageSize))
        }
    }
    handleBottomScroll2 = () => {
        const { dispatch, pageNo, pageSize, userId } = this.props
        dispatch(handleReceiveNews(userId, pageNo, pageSize))
    }
    render() {
        const { isCurrentUser, user } = this.props
        return (
            <Fragment>
                <BackHeader pageName={user.name} />
                <Container>
                    <UserInfoProfile user={user} isCurrentUser={isCurrentUser} />
                    <Row className="justify-content-center" >
                        <Col lg={6} >
                            <Row>
                                <Col>
                                    <BottomScrollListener onBottom={this.handleBottomScroll2} />
                                    <UserPostList user={user} isCurrentUser={isCurrentUser} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}



function mapStateToProps({ authedUser, users }, props) {
    const currentUser = authedUser._id
    const { userId } = props.match.params
    const isCurrentUser = (currentUser === userId) ? true : false
    const user = users[userId]

    const pageNo = ((user.news) ? user.news.length / 10 : 0) + 1
    return {
        isCurrentUser,
        userId,
        user,
        pageSize: 10,
        pageNo: pageNo
    }
}
export default connect(mapStateToProps)(Profile)