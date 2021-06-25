import React, { Fragment } from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons'
import history from '../../utils/history'
import BottomNav from './bottomNav'

function BackHeader(props) {
    const back = () => {
        history.goBack()
    }
    return (
        <Fragment>
            <div className="border-bottom border-light sticky-top bg-white ml-n4 shadow-sm">
                <Container>
                    <Navbar bg="none">
                        <Navbar.Brand>
                            <ArrowLeft className='control-icons ml-2' onClick={back} />
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

            <div className="d-block d-lg-none">
                <BottomNav />
            </div>
        </Fragment>
    );
}



export default BackHeader


