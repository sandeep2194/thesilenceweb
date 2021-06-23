import React, { Fragment } from 'react'
import SinglePostHeader from '../common/singlePostHeader'
import { Image, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react'

const SingleNews = (props) => {
    const { newsId } = props.match.params
    const { imageUrl, authorName, shares, comments, publishedAt, authorId, title, content } = props.item
    return (
        <Fragment>
            <SinglePostHeader id={newsId} />
            <Row className='justify-content-center'>
                <Col lg={5} className='p-0 m-0'>
                    <Row>
                        <Col>
                            <Image src={imageUrl} height={'250vh'} width='100%' />
                        </Col>
                    </Row>
                    <Row className='m-4 justify-content-start border-bottom border-primary'>
                        <Col xs={3} className='m-0 p-0'>
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

                    <Row className='justify-content-start m-4'>
                        <h4 className='font-weight-bold'>{title}</h4>
                    </Row>

                    <Row className='justify-content-start mx-4'>
                        <ul>
                            {
                                content.map((p, i) => (
                                    <li key={i}>
                                        <span>{p}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Row>
                    <Row>
                        {/* //todo related posts */}
                    </Row>
                </Col>
            </Row>

        </Fragment>
    )
}


function mapStateToProps({ news }, props) {
    const { newsId } = props.match.params
    return {
        item: news[newsId],
    }
}
export default connect(mapStateToProps)(SingleNews)