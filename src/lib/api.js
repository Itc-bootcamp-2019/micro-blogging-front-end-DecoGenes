import axios from 'axios';

export function getTweetsList(tweetId){
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/${tweetId}`)
}

export function createTweet(){
    return axios.post(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/`)
}