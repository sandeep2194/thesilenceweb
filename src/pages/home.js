import React from 'react';
import NewsList from '../components/newslist';
import Loader from "react-loader-spinner";
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import LogoHeader from '../components/logoheader';

function Home(props) {
    return (
        <div>
            <LogoHeader />
            <BottomScrollListener onBottom={props.updatenewsarray} />
            {(props.dataloaded) ?
                <NewsList
                    newsarray={props.newsarray}
                    handlereaction={props.handlereaction}
                    handlecontentopening={props.handlecontentopening} />
                :
                <div className='spinner'>
                    <Loader
                        type="Oval"
                        color="#2F80ED"
                        height={50}
                        width={50}
                    //timeout={3000} //3 secs
                    />
                </div>

            }
        </div>
    )
}

export default Home