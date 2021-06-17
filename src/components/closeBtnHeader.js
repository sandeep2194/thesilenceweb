import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import history from '../utils/history'
import FeatherIcon from 'feather-icons-react';

function CloseHeader(props) {
    const close = () => {
        history.push('/')
    }
    return (
        <div className="ml-n4 bg-white">
            <Container>
                <Navbar bg="none">
                    <Navbar.Brand>
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


