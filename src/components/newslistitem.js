import React from 'react';

import ReactionBar from './reactionbar.js';
import CardImage from './cardimage';
import CardContent from './cardcontent';
import CardMetaInfo from './cardmetainfo';

function NewsListItem(props) {
    return (

        <div className="row mainnewslistrow">
            <div className="col s12 m7">
                <div className="card">
                    <CardImage newsItem={props.item} />
                    <CardContent newsItem={props.item} />
                    <CardMetaInfo newsItem={props.item} />
                    <ReactionBar index={props.index} newsItem={props.item} />
                </div>
            </div>
        </div>
    )
}

export default NewsListItem





