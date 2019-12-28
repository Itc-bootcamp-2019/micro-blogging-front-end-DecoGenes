import React from 'react';
import './style.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect, Route } from "react-router-dom";
import firebase from 'firebase';


export default class SignInScreen extends React.Component {
    state = {
        isSignedIn: false,
        redirect: false
    };

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home' />
        }
    }
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user, redirect: true })
        );
        this.renderRedirect();
    }
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.state.isSignedIn) {
            return (
                <Route exact path='/'>
                    <div className='signInPage'>
                        <h1>My App</h1>
                        <p>Please sign-in:</p>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                </Route>
            );
        }
        return (
            <div className='signOutButtonPositioning'>
                <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
            </div>
        );
    }
}