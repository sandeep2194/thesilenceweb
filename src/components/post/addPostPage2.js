import { connect } from 'react-redux'
import React, { Fragment, Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import BackHeader from '../common/backheader'
import { save } from '../../actions/drafts'
import { LocationSelect, LangSelect, TopicSelect } from './customSelect'
import { handleAddPost } from '../../actions/news'

class AddPostPageTwo extends Component {
    locations = [
        {
            value: 'noida',
            label: 'Noida'
        },
        {
            value: 'patna',
            label: 'Patna'
        },
        {
            value: 'delhi',
            label: 'Delhi'
        }
    ]
    langs = [
        {
            value: 'en',
            label: 'English'
        },
        {
            value: 'hi',
            label: 'Hindi'
        },
    ]
    topics = [
        {
            value: 'covid',
            label: 'COVID'
        },
        {
            value: 'bjp',
            label: 'BJP'
        },
    ]
    handleSelect = (e, type) => {
        const { dispatch, draft } = this.props
        let newDraft = { ...draft }
        if (type === 'loc') {
            const locations = e.map(loc => loc.value)
            newDraft = { ...draft, locations }
        }
        if (type === 'lang') {
            const langs = e.map(l => l.value)
            newDraft = { ...draft, langs }
        }
        if (type === 'topic') {
            const topics = e.map(t => t.value)
            newDraft = { ...draft, topics }
        }
        dispatch(save(newDraft))
    }
    handleSubmit = () => {
        const { dispatch, draft, history, user } = this.props
        const { _id, name, profilePic } = user
        const article = {
            title: draft.title,
            content: [draft.body],
            imageUrl: draft.s3Urls[0],
            locations: draft.locations,
            langs: draft.langs,
            tags: draft.topics,
            postType: 'news',
            authorId: _id,
            authorName: name,
            authorImage: profilePic,
        }
        dispatch(handleAddPost(article, history))
    }
    render() {
        return (
            <Fragment>
                <BackHeader pageName='Add Post' >
                    <Button type='btn' size='sm' onClick={this.handleSubmit}>Post</Button>
                </BackHeader>
                <Container className='mt-2'>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <LocationSelect
                                defaultValue
                                isMulti
                                name="locations"
                                options={this.locations}
                                className="basic-multi-select my-4"
                                classNamePrefix="select"
                                placeholder="Choose Locations"
                                onChange={(e) => this.handleSelect(e, 'loc')}

                            />
                            <LangSelect
                                defaultValue
                                isMulti
                                name="langs"
                                options={this.langs}
                                className="basic-multi-select my-4"
                                classNamePrefix="select"
                                placeholder="Choose Languages"
                                onChange={(e) => this.handleSelect(e, 'lang')}
                            />
                            <TopicSelect
                                defaultValue
                                isMulti
                                name="topics"
                                options={this.topics}
                                className="basic-multi-select my-4"
                                classNamePrefix="select"
                                placeholder="Choose Topics"
                                onChange={(e) => this.handleSelect(e, 'topic')}
                            />

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ drafts, users }) {
    const userId = localStorage.getItem('userId')
    const user = users[userId]
    return { draft: drafts, user, }
}
export default connect(mapStateToProps)(AddPostPageTwo)