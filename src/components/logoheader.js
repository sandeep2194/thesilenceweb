import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Navbar, Image } from 'react-bootstrap';
import { PersonCircle, Search } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

function LogoHeader(props) {
    const { isLoggedIn, userId, firstTimeUser, profilePic } = props
    let to = '/send-otp';
    if (firstTimeUser) {
        to = '/getting-started'
    } else if (isLoggedIn && !firstTimeUser) {
        to = `/profile/${userId}`
    }
    return (
        <div className="border-bottom border-light sticky-top bg-white shadow-sm">
            <Container>
                <Navbar bg="none pl-0" >
                    <Navbar.Brand>
                        <Link to="/">
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to={to}>
                            {profilePic ? <Image src={profilePic} alt='userProfile' />
                                : <PersonCircle size={26} className="control-icons" />
                            }
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

function mapStateToProps({ authedUser }) {
    const token = localStorage.getItem('token')
    const userId = authedUser._id
    return {
        isLoggedIn: (token && userId) ? true : false,
        firstTimeUser: authedUser.username ? false : true,
        profile: authedUser.profilePic,
        userId,
    }
}

export default connect(mapStateToProps)(LogoHeader)
