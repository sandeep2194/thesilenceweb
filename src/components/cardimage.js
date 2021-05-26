import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardImage extends Component {
    state = {
        loaded: false,
    }
    handleOnLoad = () => {
        this.setState(() => ({ loaded: true, }))
    }
    render() {
        return (
            <div className="card-image" style={{ display: this.state.loaded ? "block" : "none" }}>
                <img src={this.props.newsItem.imageUrl} alt={this.props.newsItem.title} onLoad={() => this.handleOnLoad()} />
                <div className='card-title img-grad'>
                    <div className='row'>
                        <img src={this.props.newsItem.authorImage} alt={this.props.newsItem.authorName} className="circle responsive-img authorimg col s2" />
                        <span className='col s10 title'>{this.props.newsItem.title}</span>
                    </div>
                </div>
            </div>);
    }
}




function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.index]
    }
}

export default connect(mapStateToProps)(CardImage)