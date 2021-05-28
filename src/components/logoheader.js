import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function LogoHeader(props) {
    return (
        <header className='App-header' >
            <div className='container'>
                <div className='row nomargin'>
                    <div className='col s10'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='col s2'>
                        <Link
                            to={props.googleUser ? '/login' : '/login'}
                        >
                            {props.googleUser.profileObj
                                ? <img className='circle'
                                    alt='user profile'
                                    src={props.googleUser.profileObj.imageUrl}
                                    style={{
                                        maxWidth: '40px'
                                    }}
                                />
                                : <i className="material-icons medium">account_circle</i>}
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}


export default LogoHeader
