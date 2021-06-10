import React, { Component } from 'react';
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PatchCheckFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

class CardMetaInfo extends Component {
    render() {
        const { authorName, _created_at, sharesArr, commentsArr, authorId } = this.props.newsItem
        const { isLoggedIn } = this.props
        return (
            <Container className='pr-2 pt-2 medium'>
                <Row className='justify-content-start'>
                    <Col xs={5}>
                        <Link to={isLoggedIn ? `/profile/${authorId}` : '/send-otp'}>
                            <p className='meta'>
                                {authorName}
                                <PatchCheckFill className='verified ml-1 mb-1' />
                            </p>
                        </Link>

                    </Col>
                    <Col>
                        <Row className='justify-content-end'>
                            <TimeAgo
                                datetime={_created_at} className='meta mr-2' />
                            <p className='meta mr-2'>{(sharesArr.length > 1) ? sharesArr.length + ' Shares ' : null} </p>
                            <p className='meta'>{(commentsArr.length > 1) ? commentsArr.length + ' Comments' : null}  </p>
                        </Row>
                    </Col>
                </Row >
            </Container>
        );
    }
}

function mapStateToProps({ news }, props) {
    const token = localStorage.getItem('token')

    return {
        newsItem: news[props.id],
        isLoggedIn: token ? true : false,
    }
}
export default connect(mapStateToProps)(CardMetaInfo)