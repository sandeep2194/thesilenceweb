import Login from './login';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'
import NewsList from './newslist';
import LogoHeader from './logoheader';
import { handleGetNews } from '../actions/news'
import FourZeroFour from './404';
class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetNews(1, 10))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#2F80ED', height: '5px' }} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                this.props.loading === true ? null
                  : <Fragment>
                    <LogoHeader googleUser={this.props.googleUser} />
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
            <Route component={FourZeroFour} />
          </Switch>
        </Fragment>
      </Router>

    )
  }
}
function mapStateToProps({ news, googleReducer }) {
  return {
    loading: news.length === 0,
    googleUser: googleReducer,
  }
}
export default connect(mapStateToProps)(App);
