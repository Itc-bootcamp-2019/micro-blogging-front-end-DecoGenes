import React from 'react';

const TweetContext = React.createContext({
  tweets: [],
  addTweet: (tweet) => { },
  loading: '',
  error: '',
});

export default TweetContext;