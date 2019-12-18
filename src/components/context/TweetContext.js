import React from 'react';

const TweetContext = React.createContext({
  tweets: [],
  addTweet: (tweet) => { }
});

export default TweetContext;