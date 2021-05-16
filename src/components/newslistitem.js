import React from 'react';

import ReactionBar from './reactionbar.js';
import CardImage from './cardimage';
import CardContent from './cardcontent';
import CardMetaInfo from './cardmetainfo';

function NewsListItem(props) {
    return (
        <li className='newslistitem' >
            <div className="row mainnewslistrow">
                <div className="col s12 m7">
                    <div className="card">
                        <CardImage newsitem={props.newsitem} />
                        <CardContent newsitem={props.newsitem} handlecontentopening={props.handlecontentopening} index={props.index} />
                        <CardMetaInfo newsitem={props.newsitem} />
                        <ReactionBar handlereaction={props.handlereaction} index={props.index} newsitem={props.newsitem} />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default NewsListItem





