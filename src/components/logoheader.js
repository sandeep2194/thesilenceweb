import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Image, NavItem, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import BottomNav from './bottomNav'

function LogoHeader(props) {
    const { isLoggedIn, userId, firstTimeUser, profilePic } = props
    let to = '/send-otp';
    if (isLoggedIn && firstTimeUser) {
        to = '/getting-started'
    } else if (isLoggedIn && !firstTimeUser) {
        to = `/profile/${userId}`
    }
    return (
        <Fragment>
            <div className="border-bottom border-light sticky-top bg-white shadow-sm">
                <Container>
                    <Navbar bg="none pl-0" >
                        <Navbar.Brand>
                            <Link to="/">
                                <Image src={logo} alt="Logo" />
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Collapse className="justify-content-end">
                            <div className='d-none d-lg-block'>
                                <Nav className="ml-auto">
                                    <NavItem>
                                        <NavLink to="/home">
                                            <FeatherIcon icon="home" className="menu-icons" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/videos" >
                                            <FeatherIcon icon="youtube" className="menu-icons" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/post">
                                            <FeatherIcon icon="plus-square" className="menu-icons" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/bookmarks">
                                            <FeatherIcon icon="bookmark" className="menu-icons" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/notifications">
                                            <FeatherIcon icon="bell" className="menu-icons" />
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                            <NavLink to={to}>
                                {profilePic ? <Image src={profilePic} alt='userProfile' />
                                    : <FeatherIcon icon="user" className="menu-icons" />
                                }
                            </NavLink>
                            <NavLink to="/search">
                                <FeatherIcon icon="search" className="menu-icons" />
                            </NavLink>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
            <div className="d-block d-lg-none">
                <BottomNav />
            </div>
        </Fragment>

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
