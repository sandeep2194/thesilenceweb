import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import VideoListItem from './videoListItem'
import LogoHeader from './logoheader'

class VideoList extends Component {
    render() {
        const { videoList } = this.props
        return (
            <Fragment>
                <LogoHeader />
                <Container>
                    <ul>
                        {videoList.map((id) => (
                            <li key={id}>
                                <VideoListItem id={id} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ news }) {
    return {
        videoList: Object.keys(news).filter(item => item.isVideo === true)
    }
}
export default connect(mapStateToProps)(VideoList)