import React, { Component } from 'react';
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PatchCheckFill } from 'react-bootstrap-icons'

class CardMetaInfo extends Component {
    state = {}
    render() {
        const { authorName, createdAt, sharesArr, commentsArr } = this.props.newsItem
        console.log(this.props.newsItem)
        return (
            <Container className='pr-2 pt-2 medium'>
                <Row className='justify-content-start'>
                    <Col xs={5}>
                        <p className='meta'>
                            {authorName}
                            <PatchCheckFill className='verified ml-1 mb-1' />
                        </p>
                    </Col>
                    <Col>
                        <Row className='justify-content-end'>
                            <TimeAgo
                                datetime={createdAt} className='meta mr-2' />
                            <p className='meta mr-2'>{(sharesArr) ? sharesArr.length : 0} Shares .</p>
                            {/* <p className='meta'>{(commentsArr) ? commentsArr.length : 0} Comments </p> */}
                        </Row>
                    </Col>
                </Row >
            </Container>
        );
    }
}

function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.id]
    }
}
export default connect(mapStateToProps)(CardMetaInfo)