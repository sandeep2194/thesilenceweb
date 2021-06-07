import React, { Component, Fragment } from 'react'
import NewsListItem from './newslistitem'
import { Container, Row, Col } from 'react-bootstrap'
import BackHeader from './backheader'
import { connect } from 'react-redux'

class SingleNews extends Component {
    componentDidMount() {
        //todo dispatch action to fetch this newsItem and add to store
        //todo dispatch action to fetch related news
    }
    render() {
        return (
            <Fragment>
                <BackHeader pageName='News Title' />
                <Container>
                    <NewsListItem id={this.props.match.params.newsId} />
                </Container>
                <Container>
                    <Row>
                        <h3>Related Items</h3>
                    </Row>
                    <Row>
                        <ul>
                            //todo map on related news items
                    </ul>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ news, relatedNews }, props) {
    return {
        newsItem: news[props.match.params.newsId],
        relatedNews,
    }
}

export default connect(SingleNews)()