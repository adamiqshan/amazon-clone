import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWImGnLJevqci5fJO_TuloRZFWCSL6vSc",
    authDomain: "clone-8d5f8.firebaseapp.com",
    databaseURL: "https://clone-8d5f8.firebaseio.com",
    projectId: "clone-8d5f8",
    storageBucket: "clone-8d5f8.appspot.com",
    messagingSenderId: "1076405752057",
    appId: "1:1076405752057:web:6ea973d3501c4046925228",
    measurementId: "G-5K6MWQ09VV"
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }