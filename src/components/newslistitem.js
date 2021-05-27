import React, { Component } from 'react';

import ReactionBar from './reactionbar.js';
import CardImage from './cardimage';
import CardContent from './cardcontent';
import CardMetaInfo from './cardmetainfo';
import { connect } from 'react-redux'

class NewsListItem extends Component {
    render() {
        const { id } = this.props
        return (<div className="row mainnewslistrow">
            <div className="col s12 m7">
                <div className="card">
                    <CardImage id={id} />
                    <CardContent id={id} />
                    <CardMetaInfo id={id} />
                    <ReactionBar id={id} />
                </div>
            </div>
        </div>);
    }
}
export default connect()(NewsListItem)





