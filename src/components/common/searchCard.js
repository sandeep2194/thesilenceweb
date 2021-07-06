import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import TimeAgo from 'timeago-react';
import ReactionBar from './reactionbar'
import { Link } from 'react-router-dom'

class SearchCard extends Component {
    render() {
        const { title, imageUrl, authorName, shares, comments, pubDate, _id } = this.props.item
        return (
            <Row className='justify-content-center shadow-sm rounded border-light bg-white p-2 m-2'>
                <Col className='mr-2'>
                    <Row className='justify-content-center my-3'>
                        <Col className='mt-2'>
                            <Link to={`/news/${_id}`}>
                                <h6 className='font-weight-bold'>{title}</h6>
                            </Link>
                        </Col>
                        <Col xs={4} className='mr-2'>
                            <Row className='justify-content-end' >
                                <Link to={`/news/${_id}`}>
                                    <Image src={imageUrl} height={75} width={75} className='rounded' />
                                </Link>
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
                                    <TimeAgo datetime={pubDate} className='mx-1' />
                                </p>
                                <p className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</p>
                                <p className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default SearchCard