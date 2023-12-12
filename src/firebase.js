import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWVArZYQl2jr4zR4DLkhq8f6OwnmJYQ3s",
    authDomain: "fir-login-and-out-5185b.firebaseapp.com",
    projectId: "fir-login-and-out-5185b",
    storageBucket: "fir-login-and-out-5185b.appspot.com",
    messagingSenderId: "628042426739",
    appId: "1:628042426739:web:c2268f0fdda3912ee3fd06",
    measurementId: "G-ETZJBMF704"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db , auth }