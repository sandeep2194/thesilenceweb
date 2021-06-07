import SendOtp from './sendOtp';
import VerifyOtp from './verifyOtp';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'
import NewsList from './newslist';
import LogoHeader from './logoheader';
import { handleGetNews } from '../actions/news'
import FourZeroFour from './404';
import history from '../utils/history'
import ReduxToastr from 'react-redux-toastr'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetNews(1, 10))
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#2F80ED', height: '5px' }} />
          <Switch>
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
              path='/send-otp'
              render={() => (
                <SendOtp />
              )}
            />
            <Route
              path='/verify'
              render={() => (
                <VerifyOtp />
              )}
            />
            <Route component={FourZeroFour} />
          </Switch>
          <ReduxToastr
            timeOut={6000}
            newestOnTop={true}
            preventDuplicates
            position="bottom-right"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
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
