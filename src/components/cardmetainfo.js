import React from 'react';
import TimeAgo from 'timeago-react';

function CardMetaInfo(props) {
    return (
        <div className='metainforow'>
            <div className='row'>
                <p className='col s7'>
                    <span className='authorName'>
                        {props.newsItem.authorName}
                    </span>
                    <span className="material-icons verified">
                        verified</span>
                &nbsp;
                &nbsp;

                <TimeAgo
                        datetime={props.newsItem.createdAt} />
                </p>

                <p className='col s5'>{props.newsItem.shares} Shares &nbsp; {props.newsItem.comments} Comments</p>
            </div>
        </div>
    );
}

export default CardMetaInfo