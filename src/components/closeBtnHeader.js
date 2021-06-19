import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import history from '../utils/history'
import FeatherIcon from 'feather-icons-react';

function CloseHeader(props) {
    const close = () => {
        history.go(-1);

    }
    return (
        <div className="ml-n4 bg-white">
            <Container className='py-2'>
                <Navbar bg="none">
                    <Navbar.Brand>
                        <h6 className="ml-3">{props.heading}</h6>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <FeatherIcon icon="x" className="menu-icons" onClick={close} />
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}



export default CloseHeader


