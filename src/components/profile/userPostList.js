import React from 'react'
import SmallNewsListCard from '../common/smallNewsListCard'
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { Col, Nav, Tab } from 'react-bootstrap'
import ScrollMemory from '../common/scrollMemory'

function userPostList(props) {
    const { isCurrentUser, scrollCb, news, userId } = props
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
                                {(news) ? news.map((n, i) => (
                                    <li key={i}>
                                        <SmallNewsListCard item={n} isCurrentUser={isCurrentUser} />
                                    </li>
                                )) : null}

                                <ScrollMemory name={userId} />
                                <BottomScrollListener onBottom={() => scrollCb()} />
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