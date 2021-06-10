import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CardImage extends Component {
    state = {
        loaded: false,
    }
    handleOnLoad = () => {
        this.setState(() => ({ loaded: true, }))
    }
    render() {
        const { imageUrl, authorId, title, authorImage } = this.props.newsItem
        return (
            <div className='card-img' >
                <div style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                }}>
                    <Container>
                        <Row className='p-3 align-items-end' style={{
                            height: '35vh',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0), rgba(239, 239, 239, 0.0), rgba(199, 199, 199, 0.0), rgba(146, 146, 146, 0.0), rgba(93, 93, 93, 0.0), rgba(48, 48, 48, 0.8), rgba(18, 18, 18, 0.9), rgba(0, 0, 0, 1))',
                        }}>
                            <Col className='pb-2'>
                                <Row>
                                    <Col xs={1} className="my-auto mr-2">
                                        <Link to={`/profile/${authorId}`}>
                                            <Image src={authorImage} roundedCircle width={32} height={32} />
                                        </Link>
                                    </Col>
                                    <Col className='my-auto'>
                                        <p className="card-text text-white semiBold">
                                            {title}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >

        )
    }
}




function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.id]
    }
}

export default connect(mapStateToProps)(CardImage)