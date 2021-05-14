import React from 'react';
import verified from './verified.svg';
import TimeAgo from 'timeago-react';

import ReactionBar from './reactionbar.js';

function NewsListItem(props) {
    return (
        <li className='newslistitem' >
            <div className="row mainnewslistrow">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            {(props.newsitem.imageUrl != '') ?
                                <img src={props.newsitem.imageUrl} alt={props.newsitem.title} /> :
                                <div></div>
                            }
                            <div className='card-title img-grad'>
                                <div className='row'>
                                    <img src={props.newsitem.authorImage} alt={props.newsitem.authorName} className="circle responsive-img authorimg col s2" />
                                    <span className='col s10 title'>{props.newsitem.title}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <p> {props.newsitem.synopsis}</p>
                        </div>
                        <div className='metainforow'>
                            <div className='row'>
                                <p className='col s7'>
                                    {props.newsitem.authorName}
                                    <span class="material-icons verified">
                                        verified</span>
                                    &nbsp;
                                    &nbsp;

                                    <TimeAgo
                                        datetime={props.newsitem.createdAt}
                                    />
                                </p>

                                <p className='col s5'>{props.newsitem.shares} Shares &nbsp; {props.newsitem.comments} Comments</p>
                            </div>
                        </div>
                        <div className="card-action">
                            <ReactionBar handlereaction={props.handlereaction} index={props.index} newsitem={props.newsitem} />

                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default NewsListItem