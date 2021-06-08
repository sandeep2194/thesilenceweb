import React, { Component, Fragment } from 'react'
import { handleAddComment } from '../actions/news';
import BackHeader from './backheader'
import { Container, Row, Button, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import CommentTile from './commentListTile'
import { string } from 'yup';
import { toastr } from 'react-redux-toastr'

class Comment extends Component {
    state = {
        content: ''
    }

    updateContent = (e) => {
        e.preventDefault();
        this.setState({ content: e.target.value })

    }

    handleComment = (e) => {
        e.preventDefault()
        const { dispatch, itemId } = this.props
        const { content } = this.state

        const max = string().max(140).isValidSync(content)
        const min = string().min(10).isValidSync(content)

        if (max && min) {
            dispatch(handleAddComment(itemId, content))
            this.setState({ content: '' })
        } else if (min) {
            toastr.error('Too many words', 'Max 140 characters allowed')
        } else if (max) {
            toastr.error('Too little words', "Minimum 10 characters required")
        }
    }


    render() {
        const { comments } = this.props
        return (
            <Fragment>
                <BackHeader pageName='Comment' />
                <Container className='pt-5'>
                    <Row className='justify-content-center'>
                        <Col lg={3}></Col>
                        <Col className='mx-3'>
                            <Form onSubmit={this.handleComment}>
                                <Form.Control as="textarea" placeholder='Say something' value={this.state.content}
                                    onChange={this.updateContent}
                                />
                                <Button type='submit' size='sm' className='btn-block mt-3' >
                                    Comment
                            </Button>
                            </Form>
                            <Row className='mt-3'>
                                <Col>
                                    <ul>
                                        {comments.map((c, i) => (
                                            <li key={i}>
                                                <CommentTile content={c.content} />
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}></Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ news }, ownProps) {
    const { itemId } = ownProps.match.params
    return {
        comments: news[itemId].commentsArr,
        itemId,
    }
}
export default connect(mapStateToProps)(Comment)