import React from 'react';

const TweetContext = React.createContext({
  tweets: [],
  addTweet: (tweet) => { },
  loading: '',
});

export default TweetContext;