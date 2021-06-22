import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import TimeAgo from 'timeago-react';
import ReactionBar from './reactionbar'
import { connect } from 'react-redux'

import { handleAddUser } from '../actions/user'
import { Link } from 'react-router-dom';
class NewsCardHome2 extends Component {

    componentDidMount() {
        const { dispatch, } = this.props;
        const { authorId, } = this.props.item;
        dispatch(handleAddUser(authorId))
    }
    render() {
        const { title, imageUrl, authorName, shares, comments, publishedAt, synopsis, authorId, _id } = this.props.item
        return (
            <Row className='justify-content-center shadow-sm rounded border-light bg-white p-2 my-3 mx-1'>
                <Col>
                    <Row className='justify-content-center my-3'>
                        <Col className='mt-2'>
                            <h5 className='font-weight-bold'>{title}</h5>
                        </Col>
                        <Col xs={3} lg={2} className='mr-2'>
                            <Row className='justify-content-end' >
                                <Image src={imageUrl} height={75} width={75} className='rounded' />
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p>{synopsis}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Link to={`/profile/${authorId}`}>
                                <p className='text-primary'>{authorName.toUpperCase()}</p>
                            </Link>
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
                <ReactionBar newsItem={this.props.item} id={_id} />
            </Row>
        )
    }
}

export default connect()(NewsCardHome2)