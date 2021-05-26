import React, { Component } from 'react';
import { connect } from 'react-redux'

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
        return (<div className='row'>
            <div className='col s10'>
                <div className="card-content">
                    <p className='para' onClick={this.toggleContentOpen}> {synopsis}
                        <span id={(contentOpen) ? 'less' : 'more'}>...</span>
                    </p>
                    <span id={(contentOpen) ? 'more' : 'less'}>
                        {content.map((para, i) => ((para !== "undefined") && <p key={`${objectId}${i}`} className='para'>{para}</p>))}
                    </span>
                </div>
            </div>
            <div className='col s2 contentopen'>
                <i className="material-icons small"
                    onClick={this.toggleContentOpen}
                >{(contentOpen) ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i>
            </div>
        </div >);
    }
}

function mapStateToProps({ news }, props) {
    return {
        newsItem: news[props.index]
    }
}
export default connect(mapStateToProps)(CardContent);

