
import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';

const tabs = [{
    route: "/home",
    icon: "home",
}, {
    route: "/videos",
    icon: "youtube",
}, {
    route: "/post",
    icon: "plus-square",
}, {
    route: "/bookmarks",
    icon: "bookmark",
}, {
    route: "/notifications",
    icon: "bell",
}
]

const BottomNav = (props) => {
    return (
        <Nav className='fixed-bottom bg-white py-2 border-top border-light shadow-lg'>
            <div className=" d-flex flex-row justify-content-around w-100">
                {
                    tabs.map((tab, index) => (
                        <NavItem key={`tab-${index}`}>
                            <NavLink to={tab.route} className="nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">
                                    <FeatherIcon icon={tab.icon} className="bottom-menu-icons-color" />
                                    <div>{tab.label}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                    ))
                }
            </div>
        </Nav>
    )
}

export default BottomNav