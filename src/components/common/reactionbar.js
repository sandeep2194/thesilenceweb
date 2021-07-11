import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleToggleLike, handleToggleBookmark, handleToggleRetweet, handleToggleShare } from '../../actions/news'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import history from '../../utils/history';

import { FacebookShareButton, FacebookIcon, WhatsappIcon, WhatsappShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

class ReactionBar extends Component {
    state = {
        modal: false,
    }
    handleLike = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        dispatch(handleToggleLike(id))
    }
    handleBookmark = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        dispatch(handleToggleBookmark(id))
    }
    handleRetweet = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        dispatch(handleToggleRetweet(id))
    }
    handleShare = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        dispatch(handleToggleShare(id))
        this.handleModal()
    }
    handleModal = () => {
        this.setState((prevState) => ({ modal: !prevState.modal }))
    }
    render() {
        const { likesArr, bookmarksArr, _id } = this.props.newsItem;
        const { authedUser } = this.props
        const { isBookmarkPage } = this.props
        const { modal } = this.state
        return (
            <Container className='ml-0 mb-3 pr-0'>
                <Row>
                    <Col>
                        <Row className='justify-content-start '>
                            {(likesArr.includes(authedUser._id)) ? <FeatherIcon size='16' icon='thumbs-up' onClick={this.handleLike} className='reaction-icons-clicked ml-3 mr-3' /> : <FeatherIcon size='16' icon='thumbs-up' onClick={this.handleLike} className='reaction-icons-unClicked ml-3 mr-3' />}
                            <FeatherIcon size='16' icon='repeat' className='reaction-icons-unClicked mr-3'
                                onClick={this.handleRetweet}
                            />
                            <FeatherIcon size='16' icon='message-circle' className='reaction-icons-unClicked mr-3' onClick={() => history.push(`/comment/${_id}`)} />
                        </Row>
                    </Col>
                    <Col>
                        <Row className='justify-content-end align-items-center'>
                            {isBookmarkPage ? (
                                <FeatherIcon size='16' icon='trash-2' className='reaction-icons-unClicked ml-3' onClick={this.handleBookmark} />
                            ) :
                                (bookmarksArr.includes(authedUser._id))
                                    ? <FeatherIcon size='16' icon='bookmark' className='reaction-icons-clicked ml-3' onClick={this.handleBookmark} />
                                    : <FeatherIcon size='16' icon='bookmark' className='reaction-icons-unClicked ml-3' onClick={this.handleBookmark} />
                            }
                            <FeatherIcon size='16' icon='share-2' className='reaction-icons-unClicked  ml-3 mr-5' onClick={this.handleShare} />
                        </Row>
                    </Col>
                </Row>
                <Modal show={modal} onHide={this.handleModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Share
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='my-2 justify-content-around'>
                            <TwitterShareButton url={`https://${window.location.hostname}/news/${_id}`}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                            <FacebookShareButton url={`https://${window.location.hostname}/news/${_id}`}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <WhatsappShareButton url={`https://${window.location.hostname}/news/${_id}`}>
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        );
    }
}

function mapStateToProps({ news, users }, props) {
    const userId = localStorage.getItem('userId')
    return {
        newsItem: props.newsItem ? props.newsItem : news[props.id],
        authedUser: users[userId] ? users[userId] : {}
    }
}

export default connect(mapStateToProps)(ReactionBar)