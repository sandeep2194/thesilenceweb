import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FourZeroFour extends Component {
    state = {}
    render() {
        return (
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
        );
    }
}

export default FourZeroFour;