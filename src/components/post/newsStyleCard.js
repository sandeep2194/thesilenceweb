
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import TimeAgo from 'timeago-react';
import ReactionBar from '../common/reactionbar'
import { connect } from 'react-redux'
import { handleAddUser } from '../../actions/user'
import { Link } from 'react-router-dom';

class NewsStyleCard extends Component {
    state = {
        showContent: false
    }
    componentDidMount() {
        const { dispatch, } = this.props;
        const { authorId, } = this.props.item;
        dispatch(handleAddUser(authorId))
    }
    toggleContent = () => {
        this.setState(
            (prevState) => (
                {
                    showContent: !prevState.showContent
                }))
    }
    render() {
        const { title, imageUrl, authorName, shares, comments, pubDate, synopsis, authorId, _id, content, lang } = this.props.item
        const { showContent } = this.state
        return (
            <Row className='justify-content-center shadow-sm rounded border-light bg-white my-3 mx-1'>
                <Col>
                    <Row >
                        <Link to={`/news/${_id}`}>
                            <Image src={imageUrl} alt='Featured Image' style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                        </Link>
                    </Row>
                    <Row className='justify-content-center my-3'>
                        <Col className='mt-2'>
                            <h5 className='font-weight-bold' id={lang === 'hi' ? 'hindiBold' : ''} >{title}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pointer'
                                onClick={this.toggleContent}
                                id={lang === 'hi' ? 'hindiBold' : ''}
                            >{synopsis}
                                <span className='text-primary font-weight-bold pointer'
                                >{
                                        showContent ? '  ..See Less' : '  ..See More'
                                    }</span>
                            </p>
                            <div className={showContent ? 'show' : 'hide'}>
                                {
                                    content.map((p, i) => (
                                        <p key={i}
                                            id={lang === 'hi' ? 'hindiBold' : ''}
                                        >{p}</p>
                                    ))
                                }

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className='mb-2'>
                            <Link to={`/profile/${authorId}`}>
                                <span className='text-primary' style={{ fontSize: '14px', lineHeight: '0px', }}>{authorName}</span>
                            </Link>
                        </Col>
                        <Col>
                            <Row className='justify-content-end pr-3'>
                                <span className='p-0 m-0 meta'>
                                    <TimeAgo datetime={pubDate ? pubDate.toString() : null} className='mx-1' />
                                </span>
                                {/* <span className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</span>
                                <span className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</span> */}
                            </Row>
                        </Col>
                    </Row>
                    <Row className='my-3 border-bottom mx-1'>
                    </Row>
                </Col>
                <ReactionBar id={_id} />
            </Row>
        )
    }
}

export default connect()(NewsStyleCard)