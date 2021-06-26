import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import VideoCard1 from './videoCard1'

class VideoList extends Component {
    render() {
        const { videoList, isLoggedIn } = this.props
        return (
            <Container>
                {!isLoggedIn && <Redirect to="/send-otp" />}
                <Row className='justify-content-center mt-3'>
                    <Col lg={6}>
                        <ul>
                            {videoList.map((item, index) => (
                                <li key={index}>
                                    <VideoCard1 item={item} />
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
        videoList: Object.values(news).filter(item => item.isVideo === true)
    }
}
export default connect(mapStateToProps)(VideoList)