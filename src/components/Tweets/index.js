import React from 'react';
import TweetContext from '../context/TweetContext';
import './style.css'

export default class Tweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: '',
            lengthValid: true,
            errorMsg: false
        };
    }


    handleOnTweetChange(event) {
        this.setState({ tweet: event.target.value });
        if (this.state.tweet.length > 140) {
            this.setState({ lengthValid: false })
            this.setState({ errorMsg: true })

        } else {
            this.setState({ lengthValid: true })
            this.setState({ errorMsg: false })
        }
    }

    render() {
        const { tweet, lengthValid, errorMsg } = this.state;
        return (
            <TweetContext.Consumer>
                {({ addTweet, tweets }) => (
                    <div>
                        <textarea
                            name='tweet'
                            className='textTweet containerTweet'
                            onChange={event => this.handleOnTweetChange(event)}
                            placeholder='What you have in mind...'
                        ></textarea>
                        {errorMsg && <div className='errorMsgContainer'>
                            <p className='errorMsgText'>The tweet can't contain more then 140 chars.
                            </p>
                        </div>}
                            <button
                                name='tweetBtn'
                                onClick={() => addTweet(tweet)}
                                className='tweetButton tweetButtonText'
                                disabled={!lengthValid}
                            >
                                Tweet
                        </button>
                    </div>
                )}
            </TweetContext.Consumer>
        );
    }
}