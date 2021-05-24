import React from 'react';
import { connect } from 'react-redux';

function ReactionBar(props) {
    const { likedByUser, bookmarkedByUser } = props.newsItem;
    return (
        <div className="card-action">
            <div className='row reactionbar'>
                <div className='reactionitem'>
                    <i className={(likedByUser) ? "material-icons small" : "material-icons-outlined small"}
                        onClick={() => null}>
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
                        onClick={() => null}>
                        {(bookmarkedByUser) ? "bookmark" : "bookmark_border"}
                    </i>
                </div>

            </div>

        </div>

    )
}
export default connect()(ReactionBar)