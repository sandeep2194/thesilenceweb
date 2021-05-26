import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleToggleLike, handleToggleBookmark } from '../actions/news'

class ReactionBar extends Component {
    handleLike = (e) => {
        e.preventDefault()
        const { dispatch, index, newsItem } = this.props

        dispatch(handleToggleLike(index, newsItem))

    }
    handleBookmark = (e) => {
        e.preventDefault()
        const { dispatch, index, newsItem } = this.props

        dispatch(handleToggleBookmark(newsItem, index))

    }
    render() {
        const { likedByUser, bookmarkedByUser } = this.props.newsItem;
        return (<div className="card-action">
            <div className='row reactionbar'>
                <button className='reactionitem' onClick={(e) => this.handleLike(e)}>
                    {likedByUser === true
                        ? <span className="material-icons small"
                        >
                            thumb_up
                </span> :
                        <span className="material-icons-outlined small"
                        >
                            thumb_up
                </span>
                    }

                </button>

                <button className='reactionitem'>
                    <span className="material-icons small">repeat</span>

                </button>

                <button className='reactionitem'>
                    <span className="material-icons small">mode_comment</span>

                </button>

                <button className='reactionitem'>
                    <span className="material-icons flip-horizontally small">reply</span>

                </button>

                <button onClick={(e) => this.handleBookmark(e)} style={{
                    backgroundColor: 'inherit',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                }}>
                    <span className="material-icons small"
                    >
                        {(bookmarkedByUser) ? "bookmark" : "bookmark_border"}
                    </span>
                </button>

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