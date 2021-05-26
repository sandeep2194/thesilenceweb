import React, { Component } from 'react';
import NewListItem from './newslistitem.js';
import { connect } from 'react-redux'
import { handleGetNews } from '../actions/news'
import { BottomScrollListener } from 'react-bottom-scroll-listener';

class NewsList extends Component {

    handleBottomScroll = () => {
        const { dispatch, skip, limit } = this.props
        dispatch(handleGetNews(skip, limit))
    }
    render() {
        return (
            <div>
                <BottomScrollListener onBottom={this.handleBottomScroll} />
                <ul className='newslist container'>
                    {this.props.news.map((item, index) =>
                    (<li
                        key={item.objectId}
                        className='newslistitem' >
                        <NewListItem
                            index={index}
                        />
                    </li>)
                    )}
                </ul>
            </div>
        )

    }
}


function mapStateToProps({ news }) {
    return {
        news,
        skip: news.length,
        limit: 10
    }
}

export default connect(mapStateToProps)(NewsList)