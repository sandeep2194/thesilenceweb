import '../assets/css/App.css';
import '../assets/css/materialize.css';

import Login from './login';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'
import NewsList from './newslist';
import LogoHeader from './logoheader';
import { handleGetNews } from '../actions/news'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetNews(0, 10))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#2F80ED', height: '5px' }} />
          <div className='app-container'>
            <Route
              exact
              path='/'
              render={() => (
                this.props.loading === true ? null
                  : <Fragment>
                    <LogoHeader />
                    <NewsList />
                  </Fragment>
              )}
            />
            <Route
              path='/login'
              render={() => (
                <Login />
              )}
            />
          </div>
        </Fragment>
      </Router>

    )
  }
}
function mapStateToProps({ news }) {
  return {
    loading: news.length === 0,
  }
}
export default connect(mapStateToProps)(App);
