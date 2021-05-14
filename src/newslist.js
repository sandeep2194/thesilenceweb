import React, { Component } from 'react';
import NewListItem from './newslistitem.js';

class NewsList extends Component {
    render() {
        return (
            <ul className='newslist container'>
                {this.props.newsarray.map((newsitem, index) => <NewListItem newsitem={newsitem} key={newsitem.objectId}
                    handlereaction={this.props.handlereaction} index={index}
                />)}
            </ul>
        )
    }
}

export default NewsList