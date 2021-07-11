import React, { Fragment } from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import history from '../../utils/history'
import FeatherIcon from 'feather-icons-react';
import ReactionBar from './reactionbar'
import BottomNav from './bottomNav'

function SinglePostHeader(props) {
    const back = () => {
        history.goBack()
    }
    return (
        <Fragment>
            <div className="border-bottom border-light sticky-top bg-white ml-n4 shadow-sm">
                <Container>
                    <Navbar bg="none">
                        <Navbar.Brand>
                            <FeatherIcon icon='chevron-left' size={22} onClick={back} />
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Row className="justify-content-end mt-3">
                                <ReactionBar id={props.id} path={props.path} />
                            </Row>
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



export default SinglePostHeader


