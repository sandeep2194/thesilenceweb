import React, { Fragment } from 'react';
import logo from '../../assets/images/logo.svg';
import slogo from '../../assets/images/slogo.svg';

import { NavLink, Link } from 'react-router-dom';
import { Navbar, Image, NavItem, Nav, Row } from 'react-bootstrap';
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
    const { pageName } = props
    return (
        <Fragment>
            <div className="border-bottom border-light sticky-top bg-white shadow-sm">
                <Container>
                    <Navbar bg="none pl-0" >
                        <Navbar.Brand>
                            {pageName ?
                                <Row>
                                    <Link to="/">
                                        <Image src={slogo} alt="Logo" />
                                    </Link>
                                    <h6 className='pt-2'>{pageName}</h6>
                                </Row>
                                :
                                <Link to="/">
                                    <Image src={logo} alt="Logo" />
                                </Link>
                            }
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

function mapStateToProps({ users }) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const authedUser = users[userId]
    const isLoggedIn = (token && userId) ? true : false
    if (isLoggedIn) {
        return {
            isLoggedIn: isLoggedIn,
            firstTimeUser: authedUser.username ? false : true,
            profile: authedUser.profilePic,
            userId,
        }
    } else {
        return {
            isLoggedIn: false
        }
    }
}

export default connect(mapStateToProps)(LogoHeader)
