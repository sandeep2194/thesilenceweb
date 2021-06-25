import React, { Component, Fragment } from 'react';
import BackHeader from '../common/backheader'
import { Container, Row, Col } from 'react-bootstrap'
import ProgressIndicator from './progressIndicator';
import ChooseLang from './chooseLang';
import ChooseLocation from './chooseLocation'
import ChooseTopic from './chooseTopic';
import UploadAvatar from './uploadAvatar';
import PersonalDetails from './personalDetails';

class OnBoarding extends Component {
    state = {
        step: 0,
        steps: ['Choose Languages', 'Choose Locations', 'Choose Topics', 'Upload Avatar', 'Add User Detail'],
    }
    updateStep = (newStep) => {
        this.setState({ step: newStep })
    }
    render() {
        const { step, steps } = this.state
        return (
            <Fragment>
                <BackHeader pageName="Let's Get Started" />
                <Container>
                    <Row className='mt-2 justify-content-center'>
                        <Col className='mx-3' lg={6}>
                            <Row>
                                <ProgressIndicator steps={steps} activeStep={step} stepCb={this.updateStep} />
                            </Row>
                            <Row>
                                {
                                    (step === 0) && <ChooseLang stepCb={this.updateStep} />
                                }
                                {
                                    (step === 1) && <ChooseLocation stepCb={this.updateStep} />
                                }
                                {
                                    (step === 2) && <ChooseTopic stepCb={this.updateStep} />
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