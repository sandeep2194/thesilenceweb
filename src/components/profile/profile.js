import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, } from 'react-bootstrap'
import BackHeader from '../common/backheader'
import { handleReceiveNews } from '../../actions/user'
import UserPostList from './userPostList'
import UserInfoProfile from './userInfoProfile'
import { Link } from 'react-router-dom'
import { addListData } from '../../actions/listsData'
import FeatherIcon from 'feather-icons-react';

class Profile extends Component {
    componentDidMount() {
        const { dispatch, page, pageSize, userId } = this.props
        if (page === 1) {
            let pageUp = page
            dispatch(handleReceiveNews(userId, page, pageSize))
            dispatch(addListData(userId, {
                page: pageUp + 1,
                pageSize: 10
            }))
        }
    }
    handleBottomScrollNewsPost = () => {
        const { dispatch, page, pageSize, userId, totalPages } = this.props
        let pageUp = page
        if (page > 1 && page <= totalPages) {
            dispatch(handleReceiveNews(userId, page, pageSize))
            dispatch(addListData(userId, {
                page: pageUp + 1,
                pageSize: 10
            }))
        }
    }
    render() {
        const { isCurrentUser, user, userNews, userId, followedByCurrentUser } = this.props
        return (
            <Fragment>
                <BackHeader pageName='PROFILE'>
                    {
                        isCurrentUser &&
                        <Link to='/settings'>
                            <FeatherIcon icon='settings' size='18' />
                        </Link>
                    }
                </BackHeader>
                <Container>
                    <UserInfoProfile user={user} isCurrentUser={isCurrentUser} followedByCurrentUser={followedByCurrentUser} />
                    <Row className="justify-content-center" >
                        <Col lg={6} >
                            <Row>
                                <Col className='mt-3'>
                                    <UserPostList news={userNews} userId={userId} isCurrentUser={isCurrentUser} scrollCb={this.handleBottomScrollNewsPost} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}



function mapStateToProps({ users, listsData, news }, props) {
    const loggedInUserId = localStorage.getItem('userId')
    const { userId } = props.match.params
    const isCurrentUser = (loggedInUserId === userId) ? true : false
    const user = users[userId]
    const profileNewsListData = listsData[userId]
    const userNews = Object.values(news).filter(item => item.authorId === userId)
    return {
        isCurrentUser,
        userId,
        user: isCurrentUser ? users[loggedInUserId] : user,
        page: profileNewsListData ? profileNewsListData.page : 1,
        pageSize: profileNewsListData ? profileNewsListData.pageSize : 10,
        userNews,
        totalPage: 5,
        followedByCurrentUser: user.loggedInUserFollowsThisUser
    }
}
export default connect(mapStateToProps)(Profile)