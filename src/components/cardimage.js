import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap'

class CardImage extends Component {
    state = {
        loaded: false,
    }
    handleOnLoad = () => {
        this.setState(() => ({ loaded: true, }))
    }
    render() {
        return (
            <div className={(this.state.loaded ? 'd-block' : 'd-none')} >
                <img className='card-img'
                    src={this.props.newsItem.imageUrl} alt={this.props.newsItem.title} onLoad={() => this.handleOnLoad()}
                    style={{ borderRadius: 0 }}
                />
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