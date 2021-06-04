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
            <Container className="card-content">
                <Row className="mt-n5 text-white">
                    <Row className="mt-n5">
                        <Col xs={1} className="mr-2">
                            <Image src={this.props.newsItem.authorImage} roundedCircle width={32} height={32} mr-1 />
                        </Col>
                        <Col>
                            <p className="card-text">
                                {this.props.newsItem.title}
                            </p>
                        </Col>
                    </Row>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <p>{synopsis}</p>
                        {content.map((para, i) => ((para !== "undefined") &&
                            <p className={(contentOpen ? 'd-block' : 'd-none')} key={`${objectId}${i}`}>{para}</p>
                        ))}
                    </Col>
                    <Col xs={1}>
                        {(contentOpen) ? <CaretUpFill onClick={this.toggleContentOpen} size={26} /> : <CaretDownFill onClick={this.toggleContentOpen} size={26} />}
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

