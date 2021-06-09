import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { PersonCircle, Search } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'

function LogoHeader(props) {
    return (
        <div className="border-bottom border-light sticky-top bg-white shadow-sm">
            <Container>
                <Navbar bg="none pl-0" >
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/send-otp">
                            <PersonCircle size={28} className="control-icons"></PersonCircle>
                        </Link>
                        <Link to="/search">
                            <Search size={26} className="control-icons ml-4"></Search>
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>

    )
}


export default LogoHeader
