import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons'
import history from '../utils/history'

function BackHeader(props) {
    const back = () => {
        history.goBack()
    }
    return (
        <div className="border-bottom border-light sticky-top bg-white ml-n4 shadow-sm">
            <Container>
                <Navbar bg="none">
                    <Navbar.Brand>
                        <ArrowLeft className='control-icons' onClick={back} />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-center">
                        <span className="ml-n3 font-weight-bold">{props.pageName}</span>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}



export default BackHeader


