import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';

class CardContent extends Component {
    state = { contentOpen: false }
    toggleContentOpen = () => {
        this.setState((oldState) => ({
            contentOpen: !oldState.contentOpen
        }))
    }
    render() {
        const { contentOpen } = this.state
        const { synopsis, content, objectId } = this.props.newsItem
        return (
            <Container className="card-content pt-2">
                <Row>
                    <Col>
                        <p onClick={this.toggleContentOpen}>{synopsis}</p>
                        {content.map((para, i) => ((para !== "undefined") &&
                            <p className={(contentOpen ? 'd-block' : 'd-none')} key={`${objectId}${i}`}>{para}</p>
                        ))}
                    </Col>
                    <Col xs={1}>
                        {(contentOpen) ? <CaretUpFill onClick={this.toggleContentOpen} className="control-icons" /> : <CaretDownFill onClick={this.toggleContentOpen} className="control-icons" />}
                    </Col>
                </Row>
            </Container>
        )
    }
}
function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.id]
    }
}
export default connect(mapStateToProps)(CardContent);

