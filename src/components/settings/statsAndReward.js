import React, { Fragment, Component } from 'react';
import BackHeader from '../common/backheader'
import { Row, Col, Container, Button } from 'react-bootstrap'

class Stats extends Component {
    state = {
        userStats: [
            {
                name: 'Post Views',
                value: 12000000
            },
            {
                name: 'Post Shares',
                value: 6541212,
            },
            {
                name: 'Use Hours',
                value: 3600,
            },
            {
                name: "Reviews Done",
                value: 30,
            },
            {
                name: "Volunteer",
                value: 40,
            },
            {
                name: 'Donation Amount',
                value: 12351,
            },
            {
                name: 'Referral',
                value: 129,
            },
            {
                name: "Reward Amount",
                value: 65400,
            },
        ]
    }
    numFormatter = (num) => {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        } else if (num > 1000000) {
            return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }
    statsTile = (option, index) => {
        return (
            <Row key={index} className='border-bottom pt-3 justify-content-start'>
                <Col className='p-0 m-0'>
                    <h6>{option.name}</h6>
                </Col>
                <Col xs={2}>
                    <strong>{this.numFormatter(option.value)}</strong>
                </Col>
            </Row>
        )
    }
    render() {
        return (
            <Fragment>
                <BackHeader pageName='Stats' />
                <Container >
                    <Row className='mt-4 justify-content-start'>
                        <Col lg={6} className='mx-3'>
                            {this.state.userStats.map((option, index) => (
                                this.statsTile(option, index)
                            ))}
                        </Col>
                        <Col lg={6} className='mx-3 mt-5 pt-4'>
                            <Button type='submit' size='md' className='btn-block  ' >
                                TRANSFER TO BANK
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}
export default Stats;