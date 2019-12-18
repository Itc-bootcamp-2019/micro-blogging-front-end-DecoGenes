import React from 'react';
import TweetContext from "../context/TweetContext";
import './style.css'

const TweetsList = (props) => {
    return (
        <TweetContext.Consumer>
            {({ tweets, dateStamp }) => (
                tweets.map(tweet => (
                    <div
                        className='tweetContainerDisplay tweetTextDisplay'
                    >
                        <p className='usarName'>Andre</p>
                        <p className='dateStamp' key={dateStamp}>{dateStamp}</p>
                        <p key={tweet}>
                            {tweet}
                        </p>
                    </div>
                ))
            )}
        </TweetContext.Consumer>
    );
};

export default TweetsList;