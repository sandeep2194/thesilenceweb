import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import TimeAgo from 'timeago-react';
import ReactionBar from '../common/reactionbar'
import { connect } from 'react-redux'
import { handleAddUser } from '../../actions/user'
import { Link } from 'react-router-dom';

class NewsCardHome2 extends Component {
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
        const { title, imageUrl, authorName, shares, comments, pubDate, synopsis, authorId, _id, content } = this.props.item
        const { showContent } = this.state
        return (
            <Row className='justify-content-center shadow-sm rounded border-light bg-white p-2 my-3 mx-1'>
                <Col>
                    <Row className='justify-content-center my-3'>
                        <Col className='mt-2'>
                            <h5 className='font-weight-bold'>{title}</h5>
                        </Col>
                        <Col xs={3} lg={2} className='mr-2'>
                            <Row className='justify-content-end' >
                                <Link to={`/news/${_id}`}>
                                    <Image src={imageUrl} alt='Featured Image' height={75} width={75} className='rounded' />
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pointer'
                                onClick={this.toggleContent}
                            >{synopsis}
                                <span className='text-primary font-weight-bold pointer'
                                >{
                                        showContent ? '  ..See Less' : '  ..See More'
                                    }</span>
                            </p>
                            <div className={showContent ? 'show' : 'hide'}>
                                {
                                    content.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))
                                }

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Link to={`/profile/${authorId}`}>
                                <p className='text-primary'>{authorName}</p>
                            </Link>
                        </Col>
                        <Col>
                            <Row className='justify-content-end'>
                                <p className='p-0 m-0 meta'>
                                    <TimeAgo datetime={pubDate.toString()} className='mx-1' />
                                </p>
                                <p className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</p>
                                <p className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</p>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <ReactionBar id={_id} />
            </Row>
        )
    }
}

export default connect()(NewsCardHome2)