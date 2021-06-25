import React, { Fragment } from 'react';
import Stepper from 'react-stepper-horizontal'

const ProgressIndicator = (props) => {
    const { steps, activeStep } = props;
    return (
        <Fragment>
            <Stepper steps={steps.map((step, index) => ({ title: step, onClick: () => props.stepCb(index) }))} activeStep={activeStep} />
        </Fragment>
    )
}

export default ProgressIndicator