import React from 'react'
import SmallNewsListCard from './smallNewsListCard'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { Col, Row, Nav, Tab } from 'react-bootstrap'

function userPostList(props) {
    const { user, isCurrentUser, scrollCb } = props
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Col className="p-0 m-0">
                <Col className="p-0 m-0">
                    <Nav variant="pills" className="flex-row">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Posts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Causes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col className="p-0 m-0">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ul>
                                <BottomScrollListener onBottom={scrollCb} />
                                {(user.news) ? user.news.map((n, i) => (
                                    <li key={i}>
                                        <SmallNewsListCard item={n} isCurrentUser={isCurrentUser} />
                                    </li>
                                )) : null}
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">

                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Col>
        </Tab.Container>
    )
}

export default userPostList