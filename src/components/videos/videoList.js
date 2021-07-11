import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import VideoCard1 from './videoCard1'
import { handleReceiveBookmarksData } from '../../actions/authedUser';
import { handleGetNews, handleGetNewestNews } from '../../actions/news'


class VideoList extends Component {
    componentDidMount() {
        const { dispatch, page, pageSize, latestPostTime } = this.props
        // console.log(`pageNo: ${page}, pageSize: ${pageSize}, latestPostTime: ${latestPostTime}`)
        if (page === 0) {
            dispatch(handleGetNews(page, pageSize, latestPostTime, 'video', 'videoList'))
            dispatch(handleReceiveBookmarksData())
        } else if (page > 0) {
            dispatch(handleGetNewestNews(latestPostTime, 'video', 'videoList'))
        }
    }
    handleBottomScroll = () => {
        const { dispatch, page, pageSize, totalPages, latestPostTime } = this.props
        if (page > 0 && page <= totalPages) {
            dispatch(handleGetNews(page, pageSize, latestPostTime, 'video', 'videoList'))
        }
    }
    render() {
        const { news } = this.props
        return (
            <Container className='mb-5'>
                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <BottomScrollListener onBottom={this.handleBottomScroll} />
                        {news.map((item, index) => (
                            <VideoCard1 item={item} key={item._id} id={item._id + 'video'} />
                        ))}
                        {
                            news.length === 0 &&
                            <h4 className='text-center m-5'>No Videos Found</h4>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ news, listsData }) {
    const newsListData = listsData['videoList']
    const fNews = Object.values(news).filter((item) => item.postType === 'video')
    return {
        news: fNews,
        page: newsListData ? newsListData.page : 0,
        pageSize: newsListData ? newsListData.pageSize : 10,
        latestPostTime: newsListData ? newsListData.latestPostTime : Date.now(),
        totalPages: 10
    }
}
export default connect(mapStateToProps)(VideoList)