import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react';
import ReactionBar from '../common/reactionbar'

const VideoCard1 = (props) => {
    const player = useRef(null);

    const { title, authorName, shares, comments, publishedAt, authorId, _id, url } = props.item

    return (
        <Col>
            <Row className='justify-content-center bg-white pb-2 border-bottom border-light shadow-sm'>
                <Col >
                    <Row className='px-3'>
                        <Col className='p-0 m-0'>
                            <ReactPlayer url={url} width={"auto"} height={"30vh"}
                                light playing controls
                                ref={player}
                                config={{
                                    youtube: {
                                        playerVars: {
                                            mildmodestbranding: 1,
                                            fs: 0
                                        }
                                    },
                                }}
                                onEnded={() => player.current.showPreview()}
                            />
                        </Col>
                    </Row>
                    <Col className='px-3'>
                        <Row className='justify-content-center my-3'>
                            <Col className='mt-2'>
                                <h5 className='font-weight-bold'>{title}</h5>
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
                                        <TimeAgo time={publishedAt} className='mx-1' />
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
    )
}

export default VideoCard1