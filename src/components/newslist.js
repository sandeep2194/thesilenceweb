import React, { Component } from 'react';
import NewListItem from './newslistitem.js';
import { connect } from 'react-redux'

class NewsList extends Component {
    render() {
        return (<ul className='newslist container'>
            {this.props.news.map((item, index) =>
                <li
                    key={item.objectId}
                    className='newslistitem' >
                    <NewListItem
                        index={index}
                    />
                </li>
            )}
        </ul>);
    }
}


function mapStateToProps({ news }) {
    return {
        news,
    }
}

export default connect(mapStateToProps)(NewsList)