import React, { Component, Fragment } from 'react';
import BackHeader from '../common/backheader'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProgressIndicator from './progressIndicator';
import ChooseLang from './chooseLang';
import ChooseLocation from './chooseLocation'
import ChooseTopic from './chooseTopic';
import UploadAvatar from './uploadAvatar';
import PersonalDetails from './personalDetails';

class OnBoarding extends Component {
    state = {
        start: 0,
        step: -1,
        steps: ['Choose Languages', 'Choose Locations', 'Choose Topics', 'Upload Avatar', 'Add User Detail'],
    }
    updateStep = (newStep) => {
        this.setState({ step: newStep })
    }
    handleStart = () => {
        this.setState({ start: 1, step: 0 })
    }
    render() {
        const { step, steps, start } = this.state
        return (
            <Fragment>
                <BackHeader pageName="On Boarding" />
                <Container>
                    <Row className='mt-2 justify-content-center'>
                        <Col className='mx-3' lg={6}>
                            {
                                (start === 0) &&
                                <Row>
                                    <Col className='mt-5 mb-3 mx-2'>
                                        <h2 className='text-center'>Hi !</h2>

                                        <h5 className='text-center'>please give some details below for better experience</h5>
                                    </Col>
                                </Row>
                            }
                            <Row>
                                <ProgressIndicator steps={steps} activeStep={step} stepCb={this.updateStep} />
                            </Row>
                            {
                                (start === 0) &&

                                <Row className='mt-5 mx-1'>
                                    <Button type="button" size='md' className='btn-block' onClick={this.handleStart}>Start</Button>
                                </Row>
                            }
                            <Row>
                                {
                                    (step === 0) && <ChooseLang stepCb={this.updateStep} btnText='Continue' />
                                }
                                {
                                    (step === 1) && <ChooseLocation stepCb={this.updateStep} btnText='Continue' />
                                }
                                {
                                    (step === 2) && <ChooseTopic stepCb={this.updateStep} btnText='Continue' />
                                }
                                {
                                    (step === 3) && <UploadAvatar stepCb={this.updateStep} />
                                }
                                {
                                    (step === 4) && <PersonalDetails stepCb={this.updateStep} />
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default OnBoarding