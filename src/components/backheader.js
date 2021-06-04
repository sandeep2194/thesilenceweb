import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons'

function BackHeader(props) {
    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand>
                    <Link to="/">
                        <ArrowLeft size={32}></ArrowLeft>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}



export default BackHeader


