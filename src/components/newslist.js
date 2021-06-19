import React, { Component } from 'react';
import NewListItem from './newslistitem.js';
import { connect } from 'react-redux'
import { handleGetNews } from '../actions/news'
import { Container, Col } from 'react-bootstrap'
import { BottomScrollListener } from 'react-bottom-scroll-listener';

class NewsList extends Component {

    handleBottomScroll = () => {
        const { dispatch, pageNo, pageSize, } = this.props
        dispatch(handleGetNews(pageNo, pageSize))
    }
    render() {
        return (
            <Container className='mt-2 px-0'>
                <BottomScrollListener onBottom={this.handleBottomScroll} />
                <Col lg={6} className='px-0'>
                    <ul>
                        {Object.keys(this.props.news).map((id) =>
                        (<li
                            key={id}
                        >
                            <NewListItem
                                id={id}
                            />
                        </li>)
                        )}
                    </ul>
                </Col>

            </Container>
        )

    }
}


function mapStateToProps({ news }) {
    const size = 10
    return {
        news,
        pageSize: size,
        pageNo: (Object.keys(news).length / size) + 1
    }
}

export default connect(mapStateToProps)(NewsList)