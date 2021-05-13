import React, { Component } from 'react';

class ReactionBar extends Component {
    render() {
        return (
            <div className='row reactionbar'>
                <i class="material-icons">thumb_up</i>
                <i class="material-icons">thumb_down</i>
                <i class="material-icons">mode_comment</i>
                <i class="material-icons flip-horizontally">reply</i>
                <i class="material-icons">bookmark</i>
            </div>
        )
    }
}

export default ReactionBar