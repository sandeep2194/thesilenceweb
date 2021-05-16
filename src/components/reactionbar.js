import React from 'react';

function ReactionBar(props) {
    const index = props.index;
    const newsitem = props.newsitem;
    return (
        <div className="card-action">
            <div className='row reactionbar'>
                <div className='reactionitem'>
                    <i className={(newsitem.likedbyuser) ? "material-icons small" : "material-icons-outlined small"}
                        onClick={() => props.handlereaction('likes', index)}>
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
                        onClick={() => props.handlereaction('bookmarks', index)}>
                        {(newsitem.bookmarkedbyuser) ? "bookmark" : "bookmark_border"}
                    </i>
                </div>

            </div>

        </div>

    )
}

export default ReactionBar