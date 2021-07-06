import React, { Component, Fragment } from 'react';
import { Row, Col, Form, } from 'react-bootstrap'
import { connect } from 'react-redux'
import LogoHeader from '../common/logoheader';
import { fetchNews } from '../../utils/api'
import SearchCard from '../common/searchCard';
class Search extends Component {
    state = {
        query: '',
        results: [],
    }
    onChange = (e) => {
        const q = e.target.value
        this.setState({ query: q })
        fetchNews({ pageNo: 1, pageSize: 30, query: q })
            .then((d) => {
                d.result && q &&
                    this.setState({
                        results: d.result
                    })
            })
            .catch((err) => console.log(err))
    }
    render() {
        const { query, results } = this.state
        return (
            <Fragment>
                <LogoHeader pageName='Search' />
                <Fragment>
                    <Row className='justify-content-center'>
                        <Col lg={6} className='mb-3'>
                            <Form>
                                <Form.Control type='search' placeholder='search authors and news articles ' onChange={this.onChange}
                                    value={query}
                                />
                            </Form>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <ul>
                                {
                                    results.map((r) => <SearchCard item={r} />)
                                }
                            </ul>
                        </Col>
                    </Row>
                </Fragment>
            </Fragment>

        )
    }
}


export default connect()(Search)