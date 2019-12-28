import React, { useState, useEffect, useContext } from 'react'
import firebase from "./firebase";
import TweetContext from "../../context/TweetContext";

export default function index() {
    addTweet: this.handleOnTweet.bind(this)

    const [tweets, setTweets] = useState([])
    const [tweet, setTweet] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [userName, setUserName] = useState('User')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const db = firebase.firestore()
    const tweetsCollection = db.collection('tweets')
    const newDate = new Date().toISOString()
    const tweetContext = useContext(TweetContext)

    function getListOfTweets() {
        let importedTweetsArray = []
        tweetsCollection.get().then((tweetContent) => {
            tweetContent.docs.forEach(
                (response) => {
                    importedTweetsArray.push(response.data())
                    setTweets(importedTweetsArray)
                    setIsLoading(false)
                })
        }
        )
    }
}
// .catch((response) => {
//   const errorMsgServer = response.response.data
//   this.setState({
//     error: true,
//     errorMsg: errorMsgServer
//   })
// })

useEffect(() => getListOfTweets(), [])

function isLoadingTweets() {
    isLoading && <img
        className='loader'
        src='https://i0.wp.com/codemyui.com/wp-content/uploads/2018/02/cheesy-pizza-loader.gif?zoom=1.25&fit=440%2C220&ssl=1'
        alt='loading'
    />
}

function handleOnTweet(tweetContentText) {
    // const { tweets, userName } = this.state
    // const tweetObj = {
    //     userName: (localStorage.getItem('userName') || userName),
    //     content: tweetContentText,
    //     date: newDate
    // }
    tweetsCollection.add({
        userName: (localStorage.getItem('userName') || userName),
        content: tweetContentText,
        date: newDate
    })



    return (
        <TweetContext.Provider value={this.state} >
            <Tweets />
            {/* {this.state.error && <div className='errorMsgServerContainer errorMsgServerText'>{this.state.errorMsg}</div>} */}
            {isLoadingTweets()}
            < TweetsList />
        </TweetContext.Provider >
    )
}
