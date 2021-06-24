import React, { Component, Fragment } from 'react';
import { Router, } from 'react-router-dom';
import history from '../utils/history'
import LoadingBar from 'react-redux-loading'
import ReduxToastr from 'react-redux-toastr'
import AllRoutes from './routes'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#2F80ED', height: '5px' }} />
          <AllRoutes />
          <ReduxToastr
            timeOut={6000}
            newestOnTop={true}
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
export default App;
