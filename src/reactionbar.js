import React, { Component } from 'react';


class ReactionBar extends Component {
    render() {
        const index = this.props.index;
        const newsitem = this.props.newsitem;
        return (
            <div className='row reactionbar'>
                <div className='reactionitem'>
                    <i className={(newsitem.likedbyuser) ? "material-icons small" : "material-icons-outlined small"}
                        onClick={() => this.props.handlereaction('likes', index)}>
                        thumb_up
                        </i>
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
                        onClick={() => this.props.handlereaction('bookmarks', index)}>
                        {(newsitem.bookmarkedbyuser) ? "bookmark" : "bookmark_border"}
                    </i>
                </div>

            </div>
        )
    }
}

export default ReactionBar