import React from 'react';
import TweetContext from '../../context/TweetContext';
import './style.css'

export default class Tweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: '',
            isLoading: true
        };
    }


    handleOnTweetChange(event) {
        this.setState({ tweet: event.target.value });
    }

    render() {
        const { tweet } = this.state;
        return (
            <TweetContext.Consumer>
                {({ addTweet }) => (
                    <div className='wrappingTextArea'>
                        <textarea
                            name='tweet'
                            className='textTweet containerTweet'
                            onChange={event => this.handleOnTweetChange(event)}
                            placeholder='What you have in mind...'
                            value={tweet}
                        ></textarea>
                        {this.state.tweet.length > 140 &&
                            <div className='errorMsgContainer'>
                                <p className='errorMsgText'>The tweet can't contain more then 140 chars.</p>
                            </div>}
                        <button
                            name='tweetBtn'
                            onClick={() => {
                                addTweet(tweet);
                                this.setState({ tweet: '' });
                            }
                            }
                            className='tweetButton tweetButtonText'
                            disabled={this.state.tweet.length > 140 || this.state.tweet.length === 0}
                        >
                            Tweet
                        </button>
                    </div>
                )}
            </TweetContext.Consumer>
        );
    }
}