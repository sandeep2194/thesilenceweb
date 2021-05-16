import React from 'react';
import { Link } from 'react-router-dom';

function BackHeader(props) {
    return (
        <header className='App-header' >
            <div className='container'>
                <div className='row nomargin'>
                    <div className='col s10'>
                        <Link
                            to='/'
                        >
                            <i className="material-icons medium">arrow_back</i>
                        </Link>
                    </div>
                    <div className='col s2'>

                    </div>
                </div>
            </div>

        </header>
    );
}



export default BackHeader


