import React from 'react';

const TweetContext = React.createContext({
  tweets: [],
  dateStamp: [],
  addTweet: (tweet) => { }
});

export default TweetContext;