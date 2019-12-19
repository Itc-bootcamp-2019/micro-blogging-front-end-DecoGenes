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
      addTweet: this.handleOnTweet.bind(this),
      tweet: '',
      isLoading: true,
      error: false,
      errorMsg: ''
    };
  }

  getListOfTweets() {
    getTweetsList().then(response => {

      this.setState({
        tweets: response.data.tweets, isLoading: false
      })
    }).catch()
  }

  componentDidMount() {
    this.getListOfTweets()
  }

  handleOnTweet(tweet) {
    const newDate = new Date().toISOString()
    const { tweets } = this.state
    const tweetObj = {
      userName: 'Andre',
      content: tweet,
      date: newDate
    }

    {
      (createTweet(tweetObj).then(() => {
        this.setState(
          { tweets: [tweetObj, ...tweets] }
        )
      }).catch((response) => {
        const errorMsgServer = response.response.data
        this.setState({
          error: true,
          errorMsg: errorMsgServer
        })
      }
      )
      )
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <TweetContext.Provider value={this.state}>
            <Tweets>

            </Tweets>
            {this.state.error && <div className='errorMsgContainer errorMsgText'>{this.state.errorMsg}</div>}
            {this.state.isLoading &&
              <img
                className='loader'
                src='https://i0.wp.com/codemyui.com/wp-content/uploads/2018/02/cheesy-pizza-loader.gif?zoom=1.25&fit=440%2C220&ssl=1'
                alt='loading'
              />}
            <TweetsList>
            </TweetsList>
          </TweetContext.Provider>
        </header>
      </div>
    );
  }
}

export default App