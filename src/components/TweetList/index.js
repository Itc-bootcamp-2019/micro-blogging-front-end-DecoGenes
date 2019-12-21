import React from 'react';
import TweetContext from "../context/TweetContext";
import './style.css'

const TweetsList = (props) => {
    return (
        <TweetContext.Consumer>
            {({ tweets }) => (
                tweets.map(tweet => (
                    <div
                        className='tweetContainerDisplay tweetTextDisplay'
                        key={tweet.userName + tweet.date}
                    >
                        <p className='userName'>{tweet.userName}</p>
                        <p className='dateStamp'>{tweet.date}</p>
                        <p className='tweetText'>
                            {tweet.content}
                        </p>
                    </div>
                ))
            )}
        </TweetContext.Consumer>
    );
};

export default TweetsList;