import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react';
import ReactionBar from '../common/reactionbar'
import VideoPlayer from '../common/VideoPlayer'

const VideoCard1 = (props) => {

    const { title, authorName, shares, comments, pubDate, authorId, _id, videoUrl } = props.item

    return (
        <div id={props.id}>
            <Col className='my-3'>
                <Row className='justify-content-center bg-white pb-2 border-bottom border-light shadow rounded-bottom'>
                    <Col >
                        <Row>
                            <Col className='p-0 m-0'>
                                <VideoPlayer videoUrl={videoUrl} id={props.id} />
                            </Col>
                        </Row>
                        <Col className='px-3'>
                            <Row className='justify-content-center my-3'>
                                <Col className='mt-2'>
                                    <Link to={`/news/${_id}`}>
                                        <h5 className='font-weight-bold'>{title}</h5>
                                    </Link>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={4}>
                                    <Link to={`/profile/${authorId}`}>
                                        <p className='text-primary'>{authorName.toUpperCase()}</p>
                                    </Link>
                                </Col>
                                <Col className='px-2'>
                                    <Row className='justify-content-end px-3'>
                                        <p className='p-0 m-0 meta'>
                                            <TimeAgo datetime={pubDate} className='mx-1' />
                                        </p>
                                        <p className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</p>
                                        <p className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</p>
                                    </Row>

                                </Col>
                            </Row>
                            <Row className='justify-content-start'>

                                <ReactionBar newsItem={props.item} id={_id} />
                            </Row>
                        </Col>

                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default VideoCard1