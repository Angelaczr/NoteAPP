import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAbYoPIcGL64I3zaQ0EwpXllCqFvH6y7xA",
    authDomain: "terserah-f9691.firebaseapp.com",
    databaseURL: "https://terserah-f9691-default-rtdb.firebaseio.com",
    projectId: "terserah-f9691",
    storageBucket: "terserah-f9691.appspot.com",
    messagingSenderId: "464550395848",
    appId: "1:464550395848:web:f8b8f6cf4287b9cea04afd"

});

const FIREBASE = firebase;

export default FIREBASE;

