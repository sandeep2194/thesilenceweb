import React, { Component } from 'react';
import NewListItem from './newslistitem.js';
import { connect } from 'react-redux'
import { handleGetNews } from '../actions/news'
import { Container, Row, Col } from 'react-bootstrap'
import { BottomScrollListener } from 'react-bottom-scroll-listener';

class NewsList extends Component {
    handleBottomScroll = () => {
        const { dispatch, skip, limit } = this.props
        dispatch(handleGetNews(skip, limit))
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
    return {
        news,
        skip: Object.keys(news).length,
        limit: 10
    }
}

export default connect(mapStateToProps)(NewsList)