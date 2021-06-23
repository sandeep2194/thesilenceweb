import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VideoListItem from './videoListItem'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class VideoList extends Component {
    render() {
        const { videoList, isLoggedIn } = this.props
        return (
            <Container>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <Row className='justify-content-center mt-3'>
                    <Col lg={6}>
                        <ul>
                            {videoList.map((id, index) => (
                                <li key={index}>
                                    <VideoListItem id={id} />
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ news }) {
    const token = localStorage.getItem('token')
    return {
        isLoggedIn: token ? true : false,
        videoList: Object.keys(news).filter(item => item.isVideo === true)
    }
}
export default connect(mapStateToProps)(VideoList)