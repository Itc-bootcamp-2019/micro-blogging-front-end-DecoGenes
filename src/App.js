import React from 'react';
import './App.css';
import Tweets from './components/Tweets/index';
import TweetsList from './components/TweetList/index';
import { getTweetsList, createTweet } from "./lib/api";
import Navbar from './components/navBar';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from './components/Profile';
import SignInScreen from "./components/SingUp";
import TweetContext from "./context/TweetContext";
import firebase from "./firebase";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addTweet: this.handleOnTweet.bind(this),
      tweet: '',
      isLoading: true,
      userName: 'User',
      isLoggedIn: false,
    };
  }

  getListOfTweets() {
    const db = firebase.firestore()
    const tweets = db.collection('tweets')
    let arr = []
    tweets.get().then((tweet) => {
      tweet.docs.forEach(
        (response) => {
          arr.push(response.data())
          this.setState({
            tweets: arr, isLoading: false
          })
        }
      )
    }
    )
  }

  componentDidMount() {
    this.getListOfTweets()
  }
  handleOnTweet(tweet) {
    const newDate = new Date().toISOString()
    const { tweets, userName } = this.state
    const db = firebase.firestore()
    const tweetObj = {
      userName: (localStorage.getItem('userName') || userName),
      content: tweet,
      date: newDate
    }
    db.collection('tweets').add({
      userName: (localStorage.getItem('userName') || userName),
      content: tweet,
      date: newDate
    });
    (this.setState(
      {
        tweets: [tweetObj, ...tweets],
      }
    ))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <TweetContext.Provider value={this.state}>
                <Navbar />
                <SignInScreen exact path='/' />
                <Route path='/home'>
                  <Tweets />
                  {this.state.isLoading &&
                    <img
                      className='loader'
                      src='https://i0.wp.com/codemyui.com/wp-content/uploads/2018/02/cheesy-pizza-loader.gif?zoom=1.25&fit=440%2C220&ssl=1'
                      alt='loading'
                    />}
                  <TweetsList />
                </Route>
                <Route path='/profile'>
                  <Profile />
                </Route>
              </TweetContext.Provider>
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App