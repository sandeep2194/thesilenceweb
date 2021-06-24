import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetNews } from '../../actions/news'
import { Container, Col, } from 'react-bootstrap'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import NewsCardHome2 from './newsCardItemHome2'
import { handleReceiveBookmarksData } from '../../actions/authedUser';
import { addListData } from '../../actions/listsData'

class NewsList extends Component {
    componentDidMount() {
        const { dispatch, page, pageSize } = this.props
        if (page === 1) {
            let pageUp = page
            dispatch(handleGetNews(page, pageSize))
            dispatch(handleReceiveBookmarksData())
            dispatch(addListData('newsList', {
                page: pageUp + 1,
                pageSize: 10
            }))
        }
    }
    handleBottomScroll = () => {
        const { dispatch, page, pageSize } = this.props
        console.log(page)
        if (page > 1) {
            let pageUp = page
            dispatch(handleGetNews(pageUp++, pageSize))
            dispatch(addListData('newsList', {
                page: pageUp + 1,
                pageSize: 10
            }))
        }
    }
    render() {
        return (
            <Container className='mt-2'>
                <Col lg={6} className='px-0'>
                    <ul>
                        <BottomScrollListener onBottom={this.handleBottomScroll} />
                        {Object.values(this.props.news).map((item, index) =>
                        (<li
                            key={item._id}
                        >
                            <NewsCardHome2 item={item} />
                        </li>)
                        )}
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
        pageSize: newsListData ? newsListData.pageSize : 10
    }
}

export default connect(mapStateToProps)(NewsList)