import React, { Fragment } from 'react';
import NewsList from './newslist';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import LogoHeader from './logoheader';
import { connect } from 'react-redux';
import { handleGetNews } from '../actions/news'

function Home(props) {
    console.log('The Skip is: ', props.skip)
    const { dispatch, skip, limit } = props
    return (
        <Fragment>
            <LogoHeader />
            <BottomScrollListener onBottom={() => { dispatch(handleGetNews(skip, limit)) }} />
            <NewsList />
        </Fragment>
    )
}
function mapStateToProps({ news }) {
    return {
        skip: news.length,
        limit: 10,
    }
}
export default connect(mapStateToProps)(Home)