import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import ReactionBar from './reactionbar.js';
import CardImage from './cardimage';
import CardContent from './cardcontent';
import CardMetaInfo from './cardmetainfo';
import { connect } from 'react-redux'
import { handleAddUser } from '../actions/user'

class NewsListItem extends Component {
    componentDidMount() {
        const { dispatch, authorId } = this.props;
        dispatch(handleAddUser(authorId))
    }
    render() {
        const { id } = this.props
        return (
            <Card className='mb-2 border-0 rounded-0 shadow-sm'>
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

function mapStateToProps({ news }, props) {
    return {
        authorId: news[props.id].authorId
    }
}
export default connect(mapStateToProps)(NewsListItem)





