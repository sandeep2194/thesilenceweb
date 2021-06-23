import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleToggleLike, handleToggleBookmark, handleToggleRetweet, handleToggleShare } from '../../actions/news'
import { Container, Row, Col } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import history from '../../utils/history';

class ReactionBar extends Component {
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
    }
    render() {
        const { likesArr, bookmarksArr, sharesArr, retweetsArr, _id } = this.props.newsItem;
        const { authedUser } = this.props
        const { isBookmarkPage } = this.props
        return (
            <Container className='ml-0 mb-3 pr-0'>
                <Row>
                    <Col>
                        <Row className='justify-content-start '>
                            {(likesArr.includes(authedUser._id)) ? <FeatherIcon size='16' icon='thumbs-up' onClick={this.handleLike} className='reaction-icons-clicked ml-3 mr-3' /> : <FeatherIcon size='16' icon='thumbs-up' onClick={this.handleLike} className='reaction-icons-unClicked ml-3 mr-3' />}
                            {(retweetsArr.includes(authedUser._id))
                                ? <FeatherIcon size='16' icon='repeat' className='reaction-icons-clicked mr-3' onClick={this.handleRetweet} />
                                : <FeatherIcon size='16' icon='repeat' className='reaction-icons-unClicked mr-3'
                                    onClick={this.handleRetweet}
                                />
                            }
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
                            {(sharesArr.includes(authedUser._id)) ? <FeatherIcon size='16' icon='share-2' className="reaction-icons-clicked ml-3 mr-5" onClick={this.handleShare} />
                                : <FeatherIcon size='16' icon='share-2' className='reaction-icons-unClicked  ml-3 mr-5' onClick={this.handleShare} />
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps({ news, authedUser }, props) {
    return {
        newsItem: props.newsItem ? props.newsItem : news[props.id],
        authedUser,
    }
}

export default connect(mapStateToProps)(ReactionBar)