import React, { Component } from 'react';
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'

class CardMetaInfo extends Component {
    state = {}
    render() {
        return (<div className='metainforow'>
            <div className='row'>
                <p className='col s7'>
                    <span className='authorName'>
                        {this.props.newsItem.authorName}
                    </span>
                    <span className="material-icons verified">
                        verified</span>
            &nbsp;
            &nbsp;

            <TimeAgo
                        datetime={this.props.newsItem.createdAt} />
                </p>

                <p className='col s5'>{this.props.newsItem.shares} Shares &nbsp; {this.props.newsItem.comments} Comments</p>
            </div>
        </div>);
    }
}

function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.index]
    }
}
export default connect(mapStateToProps)(CardMetaInfo)