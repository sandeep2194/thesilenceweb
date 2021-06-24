import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import TimeAgo from 'timeago-react';
import ReactionBar from './reactionbar'

class BookmarksCard extends Component {
    render() {
        const { title, imageUrl, authorName, shares, comments, publishedAt, _id } = this.props.item
        return (
            <Row className='justify-content-center shadow-sm rounded border-light bg-white p-2 mb-2'>
                <Col className='mr-2'>
                    <Row className='justify-content-center my-3'>
                        <Col className='mt-2'>
                            <h6 className='font-weight-bold'>{title}</h6>
                        </Col>
                        <Col xs={4} className='mr-2'>
                            <Row className='justify-content-end' >
                                <Image src={imageUrl} height={75} width={75} className='rounded' />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <p className='text-primary'>{authorName.toUpperCase()}</p>
                        </Col>
                        <Col>
                            <Row className='justify-content-end'>
                                <p className='p-0 m-0 meta'>
                                    <TimeAgo time={publishedAt} className='mx-1' />
                                </p>
                                <p className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</p>
                                <p className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</p>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <ReactionBar newsItem={this.props.item} isBookmarkPage={true} id={_id} />
            </Row>
        )
    }
}

export default BookmarksCard