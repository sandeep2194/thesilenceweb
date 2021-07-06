import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetNews, handleGetNewestNews } from '../../actions/news'
import { Container, Col, } from 'react-bootstrap'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import NewsCardHome2 from './newsCardItemHome2'
import { handleReceiveBookmarksData } from '../../actions/authedUser';
import { addListData } from '../../actions/listsData'
import ScrollMemory from '../common/scrollMemory'

class NewsList extends Component {
    componentDidMount() {
        const { dispatch, page, pageSize, latestPostTime } = this.props
        if (page === 1) {
            dispatch(handleGetNews(page, pageSize, latestPostTime, 'news'))
            dispatch(handleReceiveBookmarksData())
        } else if (page > 1) {
            dispatch(handleGetNewestNews(latestPostTime, 'news'))
        }
    }
    handleBottomScroll = () => {
        const { dispatch, page, pageSize, totalPages, latestPostTime } = this.props
        if (page > 1 && page <= totalPages) {
            dispatch(handleGetNews(page, pageSize, latestPostTime, 'news'))
        }
    }
    render() {
        return (
            <Container className='mt-2'>
                <Col lg={6} className='px-0'>
                    <ul>
                        <ScrollMemory name='newsList' />
                        <BottomScrollListener onBottom={this.handleBottomScroll} />
                        {Object.values(this.props.news).map((item, index) =>
                        (<li
                            key={item._id}
                        >
                            <NewsCardHome2 item={item} />
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
    return {
        news,
        page: newsListData ? newsListData.page : 1,
        pageSize: newsListData ? newsListData.pageSize : 10,
        latestPostTime: newsListData ? newsListData.latestPostTime : Date.now(),
        totalPages: 10
    }
}

export default connect(mapStateToProps)(NewsList)