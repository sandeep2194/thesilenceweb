import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import CloseHeader from './closeBtnHeader'

class ChooseTopic extends Component {
    state = {
        selectedTopics: [
            'sports'
        ]
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
        const selected = this.state.selectedTopics.includes(topic)
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
            let topics = [...prevState.selectedTopics]
            const index = topics.indexOf(topic)
            const selected = topics.includes(topic)

            if (selected) {
                console.log('in selected')
                topics.splice(index, 1)
            } else {
                topics.push(topic)
            }
            return {
                selectedTopics: [...topics]
            }
        })
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <CloseHeader heading='Choose Topics' />

                            {
                                this.topics.map((topic, index) => this.topicChip(topic, index))
                            }
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

export default ChooseTopic