import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'

class VideoListItem extends Component {
    render() {
        const { url, authorImage, title, authorName, _created_at } = this.props.videoItem
        return (
            <Fragment>
                <Card>
                    <div className="card-img">
                        <ReactPlayer url={url} />
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col>
                                    <Image src={authorImage} roundedCircle className="my-auto" />
                                </Col>
                                <Col>
                                    <p className="card-text text-white semiBold">
                                        {title}
                                    </p>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Card.Text>
                            <p className='meta'>{authorName}</p>
                            <p>.<TimeAgo datetime={_created_at} className='meta' /></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

function mapStateToProps({ news }, props) {
    return {
        videoItem: news[props.id]
    }
}
export default connect(mapStateToProps)(VideoListItem)