import React from 'react'
import { useField } from 'formik';
import { Col, Form as FormB } from 'react-bootstrap'

export const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Col>
            <FormB.Control name="firstName" type="text" placeholder='First Name' {...field} {...props} className={meta.touched && meta.error ? 'is-invalid' : ''} />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">
                    {meta.error}
                </div>
            ) : null}
        </Col>
    );
};

export const DatePicker = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Col>
            <FormB.Group controlId="dob">
                <FormB.Label>{label}</FormB.Label>
                <FormB.Control type="date" name="dob" placeholder="Date of Birth" {...field} {...props}
                />
            </FormB.Group>
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">
                    {meta.error}
                </div>
            ) : null}
        </Col>
    );
};

export const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Col>
            <select  {...field} {...props} className="form-control" />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">
                    {meta.error}
                </div>
            ) : null}
        </Col>
    );
};