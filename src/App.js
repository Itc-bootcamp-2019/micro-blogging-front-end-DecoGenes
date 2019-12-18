import React from 'react';
import './App.css';
import TweetContext from "./components/context/TweetContext";
import Tweets from './components/Tweets/index';
import TweetsList from './components/TweetList/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      dateStamp:[],
      addTweet: this.handleOnTweet.bind(this)
    };
  }

  componentWillMount() {
    // update to if statement at the end
    localStorage.getItem('tweets') && this.setState({
      tweets: JSON.parse(localStorage.getItem('tweets'))
    })
  }

  componentWillUpdate(nextProps, nextStage) {
    localStorage.setItem('tweets', JSON.stringify(nextStage.tweets), [nextProps]);
  }

  handleOnTweet(tweet) {
    const newDate = new Date().toISOString()
    const { tweets, dateNow } = this.state
    const tweetList = [tweet, ...tweets]
    this.setState({ tweets: tweetList, dateStamp: newDate });
    localStorage.setItem('tweets', JSON.stringify(tweetList));
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