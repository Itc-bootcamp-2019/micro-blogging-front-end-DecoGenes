import axios from 'axios';

export function getTweetsList(){
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`)
}

export function createTweet(tweetObj){
    return axios.post(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`, {tweet: tweetObj})
}