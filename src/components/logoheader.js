import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Image, NavItem, Nav } from 'react-bootstrap';
import { Person, Search, House, PlayBtn, PlusCircle, Bookmark, Bell } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import BottomNav from './bottomNav'

function LogoHeader(props) {
    const { isLoggedIn, userId, firstTimeUser, profilePic } = props
    let to = '/send-otp';
    if (firstTimeUser) {
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
                                        <NavLink to="/home" className="nav-link" activeClassName="active">
                                            <House className="ml-4" size={24} />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/videos" className="nav-link" activeClassName="active">
                                            <PlayBtn className=" ml-4" size={24} />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/post" className="nav-link" activeClassName="active">
                                            <PlusCircle className=" ml-4" size={24} />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/bookmarks" className="nav-link" activeClassName="active">
                                            <Bookmark className=" ml-4" size={24} />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/notifications" className="nav-link" activeClassName="active">
                                            <Bell className="ml-4" size={24} />
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                            <NavLink to={to}>
                                {profilePic ? <Image src={profilePic} alt='userProfile' />
                                    : <Person size={28} className="control-icons ml-4" />
                                }
                            </NavLink>
                            <NavLink to="/search">
                                <Search size={24} className="control-icons ml-4"></Search>
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
