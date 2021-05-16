import React from 'react';
import NewListItem from './newslistitem.js';

function NewsList(props) {
    return (
        <ul className='newslist container'>
            {props.newsarray.map((newsitem, index) =>
                <NewListItem
                    key={newsitem.objectId}
                    newsitem={newsitem}
                    id={newsitem.objectId}
                    handlereaction={props.handlereaction}
                    index={index}
                    handlecontentopening={props.handlecontentopening}
                />)}
        </ul>
    )
}


export default NewsList