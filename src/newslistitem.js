import React from 'react';
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
                        <div className='row'>
                            <div className='col s10'>
                                <div className="card-content">
                                    <p className='para'> {props.newsitem.synopsis}
                                        <span id="dots">...</span>
                                    </p>
                                    <span id={(props.newsitem.contentopen) ? 'more' : 'less'}>
                                        {props.newsitem.content.map((para) => (<p className='para'>{para}</p>))}
                                    </span>
                                </div>
                            </div>
                            <div className='col s2 contentopen'>
                                <i className="material-icons small"
                                    onClick={() => (props.handlecontentopening(props.index))}
                                >{(props.newsitem.contentopen) ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i>
                            </div>
                        </div>

                        <div className='metainforow'>
                            <div className='row'>
                                <p className='col s7'>
                                    {props.newsitem.authorName}
                                    <span className="material-icons verified">
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