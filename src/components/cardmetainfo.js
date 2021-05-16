import React from 'react';
import TimeAgo from 'timeago-react';


function CardMetaInfo(props) {
    return (
        <div className='metainforow'>
            <div className='row'>
                <p className='col s7'>
                    <span className='authorName'>
                        {props.newsitem.authorName}
                    </span>
                    <span className="material-icons verified">
                        verified</span>
                &nbsp;
                &nbsp;

                <TimeAgo
                        datetime={props.newsitem.createdAt} />
                </p>

                <p className='col s5'>{props.newsitem.shares} Shares &nbsp; {props.newsitem.comments} Comments</p>
            </div>
        </div>
    );
}

export default CardMetaInfo