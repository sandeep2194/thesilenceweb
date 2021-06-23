import React from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';
import history from '../utils/history'
import FeatherIcon from 'feather-icons-react';

function BackHeader(props) {
    const back = () => {
        history.goBack()
    }
    return (
        <div className="border-bottom border-light sticky-top bg-white ml-n4 shadow-sm">
            <Container>
                <Navbar bg="none">
                    <Navbar.Brand>
                        <FeatherIcon icon='chevron-down' size={16} />
                    </Navbar.Brand>
                    <Col>
                        <h6 className='pt-2'>{props.pageName}</h6>
                    </Col>
                    <Navbar.Collapse className="justify-content-end">
                        {props.children}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div >
    );
}



export default BackHeader


