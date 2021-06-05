import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleToggleLike, handleToggleBookmark } from '../actions/news'
import { Container, Row, Col } from 'react-bootstrap'
import {
    HandThumbsUp,
    HandThumbsUpFill,
    ArrowRepeat,
    ChatRightFill,
    Bookmark,
    BookmarkFill,
    Reply,
    ReplyFill
} from 'react-bootstrap-icons'

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
    render() {
        const { likedByUser, booksArr, sharesArr } = this.props.newsItem;
        return (
            <Container className='ml-3 mb-4 pr-4'>
                <Row>
                    <Col>
                        {(likedByUser) ? <HandThumbsUpFill onClick={this.handleLike} className='reaction-icons-clicked' /> : <HandThumbsUp onClick={this.handleLike} className='reaction-icons-unClicked' />}
                    </Col>
                    <Col>
                        <ArrowRepeat className='reaction-icons-unClicked' />
                    </Col>
                    <Col>
                        <ChatRightFill className='reaction-icons-unClicked' />
                    </Col>
                    <Col>
                        {(booksArr) ? <BookmarkFill className='reaction-icons-clicked' onClick={this.handleBookmark} /> : <Bookmark className='reaction-icons-unClicked' onClick={this.handleBookmark} />}
                    </Col>
                    <Col>
                        {(sharesArr) ? <ReplyFill className="reaction-icons-clicked flip" />
                            : <Reply className='reaction-icons-unClicked flip' />

                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.id]
    }
}

export default connect(mapStateToProps)(ReactionBar)