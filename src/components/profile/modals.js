import React from 'react'
import { Modal } from 'react-bootstrap'

function RevivoModal(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RevivoModal