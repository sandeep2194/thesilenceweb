import React, { Component } from 'react';
import NewListItem from './newslistitem.js';

class NewsList extends Component {
    render() {
        return (
            <ul className='newslist container'>
                {this.props.newsarray.map((newsitem) => <NewListItem newsitem={newsitem} key={newsitem.objectId} />)}
            </ul>
        )
    }
}

export default NewsList