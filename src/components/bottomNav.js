import React from 'react'
import { House, PlayBtn, PlusCircle, Bookmark, Bell } from 'react-bootstrap-icons'
import { Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const tabs = [{
    route: "/home",
    icon: <House size="24" />,
}, {
    route: "/videos",
    icon: <PlayBtn size="24" />,
}, {
    route: "/post",
    icon: <PlusCircle size="24" />,
}, {
    route: "/bookmarks",
    icon: <Bookmark size="24" />,
}, {
    route: "/notifications",
    icon: <Bell size="24" />,
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
                                    {tab.icon}
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