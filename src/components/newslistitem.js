import React, { Component } from 'react';

import ReactionBar from './reactionbar.js';
import CardImage from './cardimage';
import CardContent from './cardcontent';
import CardMetaInfo from './cardmetainfo';
import { connect } from 'react-redux'

class NewsListItem extends Component {
    render() {
        const { index } = this.props
        return (<div className="row mainnewslistrow">
            <div className="col s12 m7">
                <div className="card">
                    <CardImage index={index} />
                    <CardContent index={index} />
                    <CardMetaInfo index={index} />
                    <ReactionBar index={index} />
                </div>
            </div>
        </div>);
    }
}
export default connect()(NewsListItem)





