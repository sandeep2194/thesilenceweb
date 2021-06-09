import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BackHeader from './backheader'

class FourZeroFour extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <BackHeader pageName='Page Not Found' />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '2rem',
                    textAlign: 'center',
                }}>
                    <h3>404 Error</h3>
                    <p>Sorry the page you are looking for was not found!  </p>
                    <Link to='/' style={{ margin: '1rem' }}> Goto Home</Link>
                </div>
            </Fragment>
        );
    }
}

export default FourZeroFour;