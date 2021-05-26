import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardImage extends Component {
    render() {
        return (<div className="card-image">
            {(this.props.newsItem.imageUrl !== '') ?
                <img src={this.props.newsItem.imageUrl} alt={this.props.newsItem.title} /> :
                <div></div>}
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