import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux'
import { handleUpdateUser } from '../../actions/authedUser'
import history from '../../utils/history'
import { toastr } from 'react-redux-toastr'

class ChooseTopic extends Component {
    state = {
        selectedTopics: [
        ]
    }

    componentDidMount() {
        const { selectedTopics } = this.props
        this.setState({ selectedTopics: selectedTopics })
    }
    topics = [
        'sports',
        'health',
        'india',
        'world',
        'covid',
        'travel',
        'CAA-NRC'
    ]

    topicChip = (topic, index) => {
        const selected = this.state.selectedTopics && this.state.selectedTopics.includes(topic)
        return (
            <Button key={index} variant="outline-primary" size="md" className={selected ? 'm-2 lang-loc-topic-chipBtn active' : 'm-2 lang-loc-topic-chipBtn'}
                onClick={() => this.updateTopic(topic)}
            >
                <Row className='align-items-center'>
                    {
                        !selected &&
                        <span className="lan-abbreviation rounded-circle bg-primary">
                            <i style={{ fontSize: '0.7rem', marginLeft: '.2rem', marginRight: '.2rem' }}>#</i>
                        </span>
                    }

                    <span className={selected ? 'ml-2' : ''}>{topic}</span>
                    {
                        selected &&
                        <i className="rounded-circle bg-white px-1 ml-2 mb-1">
                            <FeatherIcon icon='check' size="16" color="#4F4F4F" />
                        </i>

                    }
                </Row>
            </Button >
        )
    }
    updateTopic = (topic) => {
        this.setState((prevState) => {
            let topics = prevState.selectedTopics ? [...prevState.selectedTopics] : []
            const index = topics.indexOf(topic)
            const selected = topics.includes(topic)

            if (selected) {
                topics.splice(index, 1)
            } else {
                topics.push(topic)
            }
            return {
                selectedTopics: [...topics]
            }
        })
    }

    handleTopicSubmit = () => {
        const { selectedTopics } = this.state
        const { dispatch, stepCb } = this.props
        stepCb &&
            stepCb(3)
        dispatch(handleUpdateUser({
            topics: selectedTopics,
        }))
        if (!stepCb) {
            history.goBack()
            toastr.success('Topics Saved')
        }
    }
    render() {
        const { btnText } = this.props
        return (
            <Fragment>
                <Container className='my-5'>
                    <Row className="justify-content-center">
                        <Col lg={6}>

                            {
                                this.topics.map((topic, index) => this.topicChip(topic, index))
                            }
                        </Col>
                    </Row>
                    <Row className='mt-5 mx-1'>
                        <Button type="button" size='md' className='btn-block' onClick={this.handleTopicSubmit}>{btnText}</Button>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    const userId = localStorage.getItem('userId')
    const user = users[userId]
    return {
        selectedTopics: user && user.topics !== null ? user.topics : []
    }
}
export default connect(mapStateToProps)(ChooseTopic)