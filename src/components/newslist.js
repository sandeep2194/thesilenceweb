import React, { Component } from 'react';
import NewListItem from './newslistitem.js';
import { connect } from 'react-redux'
import { handleGetNews } from '../actions/news'
import { Container, Row, Col } from 'react-bootstrap'
import { BottomScrollListener } from 'react-bottom-scroll-listener';

class NewsList extends Component {

    handleBottomScroll = () => {
        const { dispatch, pageNo, pageSize, } = this.props
        dispatch(handleGetNews(pageNo, pageSize))
    }
    render() {
        return (
            <Container className='mt-3'>
                <Row>
                    <Col>
                        <BottomScrollListener onBottom={this.handleBottomScroll} />
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
                    <Col lg={6}></Col>
                </Row>
            </Container>
        )

    }
}


function mapStateToProps({ news }) {
    const size = 10
    return {
        news,
        pageSize: size,
        pageNo: (news.length / size) + 1
    }
}

export default connect(mapStateToProps)(NewsList)