import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAp4hfwKpZHdtZM8Sj7kNpykFrbMWde0Pk",
    authDomain: "micro-blog-itc.firebaseapp.com",
    databaseURL: "https://micro-blog-itc.firebaseio.com",
    projectId: "micro-blog-itc",
    storageBucket: "micro-blog-itc.appspot.com",
    messagingSenderId: "657096975277",
    appId: "1:657096975277:web:c376ecbed42fd161f0f724",
    measurementId: "G-80CB7L2B5Z"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase