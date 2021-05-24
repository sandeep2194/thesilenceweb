import React from 'react';
import NewListItem from './newslistitem.js';
import { connect } from 'react-redux'

function NewsList(props) {
    return (
        <ul className='newslist container'>
            {props.news.map((item, index) =>
                <li
                    key={item.objectId}
                    className='newslistitem' >
                    <NewListItem
                        index={index}
                        item={item}
                    />
                </li>
            )}
        </ul>
    )
}
function mapStateToProps({ news }) {
    return {
        news,
    }
}

export default connect(mapStateToProps)(NewsList)