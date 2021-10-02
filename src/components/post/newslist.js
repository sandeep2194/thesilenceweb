import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetNews, handleGetNewestNews } from '../../actions/news'
import { Container, Col, } from 'react-bootstrap'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import NewsCardHome2 from './newsCardItemHome2'
import NewsStyleCard from './newsStyleCard'
import { handleReceiveBookmarksData } from '../../actions/authedUser';
import ScrollMemory from '../common/scrollMemory'

class NewsList extends Component {
    componentDidMount() {
        const { dispatch, page, pageSize, latestPostTime } = this.props
        //    console.log(`pageNo: ${page}, pageSize: ${pageSize}, latestPostTime: ${latestPostTime}`)
        if (page === 0) {
            dispatch(handleGetNews(page, pageSize, latestPostTime, 'news', 'newsList'))
            dispatch(handleReceiveBookmarksData())
        } else if (page > 0) {
            dispatch(handleGetNewestNews(latestPostTime, 'news', 'newsList'))
        }
    }
    handleBottomScroll = () => {
        const { dispatch, page, pageSize, totalPages, latestPostTime } = this.props
        if (page > 0 && page <= totalPages) {
            dispatch(handleGetNews(page, pageSize, latestPostTime, 'news', 'newsList'))
        }
    }
    render() {
        const { news } = this.props
        return (
            <Container className='m-0 p-0 bg-light'>
                <Col lg={6} className='px-0'>
                    <ul>
                        <ScrollMemory name='newsList' />
                        <BottomScrollListener onBottom={this.handleBottomScroll} />
                        {news.map((item) =>
                        (<li
                            key={item._id}
                        >
                            <NewsStyleCard item={item} />
                        </li>)
                        )}
                        {
                            Object.values(this.props.news).length === 0 &&
                            <h4 className='text-center m-5'>No News Found</h4>
                        }
                    </ul>
                </Col>
            </Container>
        )

    }
}
function mapStateToProps({ news, listsData }) {
    const newsListData = listsData['newsList']
    let fNews = Object.values(news).filter((item) => item.postType === 'news')
    return {
        news: fNews,
        page: newsListData ? newsListData.page : 0,
        pageSize: newsListData ? newsListData.pageSize : 10,
        latestPostTime: newsListData ? newsListData.latestPostTime : Date.now(),
        totalPages: 10
    }
}

export default connect(mapStateToProps)(NewsList)