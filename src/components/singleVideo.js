import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import BackHeader from './backheader'
import ReactPlayer from 'react-player'
import ReactionBar from './reactionbar'
import VideoListItem from './videoListItem'

class SingleVideo extends Component {

    componentDidMount() {
        //todo dispatch action to fetch this video
        //todo dispatch action to fetch related videos
    }
    handleFollow = (id) => {
        //todo dispatch action to follow
    }
    render() {
        return (
            <Fragment>
                <BackHeader pageName='Video' />
                <Container fluid>
                    <Row><ReactPlayer url={url} /></Row>
                    <Row>
                        <p>{title}</p>
                    </Row>
                    <Row>
                        <ReactionBar id={id} />
                    </Row>
                    <Row>
                        <Col>
                            <Image src={authorImage} roundedCircle />
                        </Col>
                        <Col>
                            <Button onClick={this.handleFollow(authorId)}>
                                Follow
                        </Button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <h4>Related Vides</h4>
                    </Row>
                    <Row>
                        {relatedVideos.map((id) => (
                            <li key={id}>
                                <VideoListItem id={id} />
                            </li>
                        ))}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}


function mapStateToProps({ news }) {
    return {

    }
}
export default SingleVideo