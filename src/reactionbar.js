import React, { Component } from 'react';

class ReactionBar extends Component {
    render() {
        const index = this.props.index;
        const newsitem = this.props.newsitem;
        return (
            <div className='row reactionbar'>
                <i className={(this.props.newsitem.likedbyuser) ? "material-icons" : "material-icons-outlined"}
                    onClick={() => this.props.handlereaction('likes', index)}>
                    thumb_up
                        </i>
                <i className="material-icons">repeat</i>
                <i className="material-icons">mode_comment</i>
                <i className="material-icons flip-horizontally">reply</i>
                <i className="material-icons"
                    onClick={() => this.props.handlereaction('bookmarks', index)}>
                    {(this.props.newsitem.bookmarkedbyuser) ? "bookmark" : "bookmark_border"}
                </i>
            </div>
        )
    }
}

export default ReactionBar