import Login from './login';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'
import NewsList from './newslist';
import LogoHeader from './logoheader';
import { handleGetNews } from '../actions/news'
import FourZeroFour from './404';
import history from '../utils/history'
import { Alert } from 'react-bootstrap'

class App extends Component {
  state = {
    showSuccessLoginAlert: false
  }
  componentDidMount() {
    const { alerts } = this.props
    this.props.dispatch(handleGetNews(1, 10))
    if (alerts === 'Login Successful') {
      this.setState(() => ({ showSuccessLoginAlert: true }))
    }
  }
  onClose = () => {
    this.setState({ showSuccessLoginAlert: false })
  }
  render() {
    const { showSuccessLoginAlert } = this.state
    const { alerts } = this.props
    return (
      <Router history={history}>
        <Fragment>
          {(showSuccessLoginAlert) ? <Alert dismissible variant='success' onClose={this.onClose}>{alerts}</Alert> : null}
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
function mapStateToProps({ news, alerts }) {
  return {
    loading: news.length === 0,
    alerts,
  }
}
export default connect(mapStateToProps)(App);
