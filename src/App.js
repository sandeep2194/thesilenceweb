import logo from './logo.svg';
import './App.css';
import './materialize.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React, { Component } from 'react';
import NewsList from './newslist.js';
import Loader from "react-loader-spinner";
import { BottomScrollListener } from 'react-bottom-scroll-listener';


class App extends Component {
  state = {
    newsarray: [],
    dataloaded: false,
    skip: 0,
    limit: 10,
  }

  fetchnews = async () => {
    const url = `http://13.233.129.14/parse/classes/NewsPost?skip=${this.state.skip}&limit=${this.state.limit}&order=-createdAt`
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'myappID',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  componentDidMount() {
    this.updatenewsarray();
  }

  updatenewsarray = () => {
    this.fetchnews().then((res) => {
      const results = res.results;
      this.setState((oldstate) => ({
        newsarray: [...oldstate.newsarray, ...results],
        dataloaded: true,
        skip: oldstate.skip + oldstate.limit,
      }))
    });
  }

  updatereaction = async (reaction, value, id) => {
    const url = 'http://13.233.129.14/parse/classes/NewsPost/' + id;

    const body = {};
    body[reaction] = value;
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'myappID',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body)
    });
    return response.json();
  }

  handlereaction = (reaction, index) => {
    let newnewsarray = this.state.newsarray;

    if (reaction === 'likes') {
      if (!newnewsarray[index].likedbyuser) {
        newnewsarray[index].likes += 1
        newnewsarray[index].likedbyuser = true
      }
      else {
        newnewsarray[index].likes -= 1
        newnewsarray[index].likedbyuser = false
      }
      this.setState(() => ({
        newsarray: newnewsarray,
      }), () => (this.updatereaction('likes', this.state.newsarray[index].likes, this.state.newsarray[index].objectId))
      );
    }
    if (reaction === 'bookmarks') {
      if (!newnewsarray[index].bookmarkedbyuser) {
        newnewsarray[index].bookmarks += 1
        newnewsarray[index].bookmarkedbyuser = true
      }
      else {
        newnewsarray[index].bookmarks -= 1
        newnewsarray[index].bookmarkedbyuser = false
      }
      this.setState(() => ({
        newsarray: newnewsarray,
      }), () => (this.updatereaction('bookmarks', this.state.newsarray[index].bookmarks, this.state.newsarray[index].objectId))
      );
    }
  }

  render() {
    return (
      <div>
        <header className='App-header' >
          <img src={logo} alt='logo' />
        </header>
        <div className='app-container'>
          <BottomScrollListener onBottom={this.updatenewsarray} />
          {(this.state.dataloaded) ?
            <NewsList newsarray={this.state.newsarray} handlereaction={this.handlereaction} />
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
      </div>
    )
  }
}

export default App;
