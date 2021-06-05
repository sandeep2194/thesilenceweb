import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons'

function BackHeader(props) {
    return (
        <div className="border-bottom border-light sticky-top bg-white ml-n4">
            <Container>
                <Navbar bg="none">
                    <Navbar.Brand>
                        <Link to="/">
                            <ArrowLeft className='control-icons'></ArrowLeft>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}



export default BackHeader


