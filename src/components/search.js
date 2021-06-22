import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import { Search as SearchIcon } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import LogoHeader from './logoheader';

class Search extends Component {
    state = {
        query: ''
    }
    onChange = (e) => {
        this.setState({ query: e.target.value })
    }
    render() {
        return (
            <Fragment>
                <LogoHeader pageName='Search' />
                <Container className='pt-5'>
                    <Row className='justify-content-center'>
                        <Col lg={6} className='mx-3'>
                            <Form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className='rounded-left'>
                                        <SearchIcon className="control-icons " />
                                    </InputGroup.Text>
                                    <Form.Control type='search' placeholder='search authors and news articles ' onChange={this.onChange}
                                        value={this.state.query}
                                    />
                                </InputGroup>

                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                {/* todo map over search results to show newList Item */}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        )
    }
}

function mapStateToProps({ searchResults }) {
    return {
        results: searchResults,
    }
}
export default connect(mapStateToProps)(Search)