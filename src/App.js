import React from 'react';
import './App.css';
import TweetContext from "./components/context/TweetContext";
import Tweets from './components/Tweets/index';
import TweetsList from './components/TweetList/index';
import { getTweetsList, createTweet } from "./lib/api";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      dateStamp: [],
      addTweet: this.handleOnTweet.bind(this)
    };
  }

  // componentDidMount() {
  //   // update to if statement at the end
  //   localStorage.getItem('tweets') && this.setState({
  //     tweets: JSON.parse(localStorage.getItem('tweets'))
  //   })
  // }

  componentDidMount() {
    // update to if statement at the end
    getTweetsList().then(response => {
      this.setState({
        tweets: response.data.tweets
      })
    })
  }

  handleOnTweet(tweet) {
    const newDate = new Date().toISOString()
    const { tweets } = this.state
    const tweetList = [tweet, ...tweets]
    this.setState({ tweets: tweetList, dateStamp: newDate });
    createTweet({
      userName: 'Andre',
      content: tweet,
      date: newDate
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <TweetContext.Provider value={this.state}>
            <Tweets />
            <TweetsList />
          </TweetContext.Provider>
        </header>
      </div>
    );
  }
}

export default App