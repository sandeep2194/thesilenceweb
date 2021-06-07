import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import ReactionBar from './reactionbar.js';
import CardImage from './cardimage';
import CardContent from './cardcontent';
import CardMetaInfo from './cardmetainfo';
import { connect } from 'react-redux'

class NewsListItem extends Component {
    render() {
        const { id } = this.props
        return (
            <Card className='mb-3'>
                <CardImage id={id} />
                <Card.Body>
                    <CardContent id={id} />
                    <CardMetaInfo id={id} />
                </Card.Body>
                <ReactionBar id={id} />
            </Card>
        );
    }
}
export default connect()(NewsListItem)





