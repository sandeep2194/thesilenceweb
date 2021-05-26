import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleToggleLike } from '../actions/news'

class ReactionBar extends Component {
    handleLike = (e) => {
        e.preventDefault()
        const { dispatch, index, newsItem } = this.props

        dispatch(handleToggleLike(index, newsItem))

    }
    render() {
        const { likedByUser, bookmarkedByUser } = this.props.newsItem;
        return (<div className="card-action">
            <div className='row reactionbar'>
                <div className='reactionitem'>
                    {likedByUser === true
                        ? <i className="material-icons small"
                            onClick={(e) => this.handleLike(e)}>
                            thumb_up
                </i> :
                        <i className="material-icons-outlined small"
                            onClick={(e) => this.handleLike(e)}>
                            thumb_up
                </i>
                    }

                </div>

                <div className='reactionitem'>
                    <i className="material-icons small">repeat</i>

                </div>

                <div className='reactionitem'>
                    <i className="material-icons small">mode_comment</i>

                </div>

                <div className='reactionitem'>
                    <i className="material-icons flip-horizontally small">reply</i>

                </div>

                <div>
                    <i className="material-icons small"
                        onClick={() => null}>
                        {(bookmarkedByUser) ? "bookmark" : "bookmark_border"}
                    </i>
                </div>

            </div>

        </div>
        );
    }
}

function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.index]
    }
}

export default connect(mapStateToProps)(ReactionBar)