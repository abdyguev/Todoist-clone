import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCdiL2urS2V19ZalIJSJgfyO2AC54qqKIU",
    authDomain: "todo-app-280ad.firebaseapp.com",
    databaseURL: "https://todo-app-280ad.firebaseio.com",
    projectId: "todo-app-280ad",
    storageBucket: "todo-app-280ad.appspot.com",
    messagingSenderId: "184961544062",
    appId: "1:184961544062:web:7bac08088315a3eeb68d2f",
    measurementId: "G-8KX1M9HZPB",
});

export { firebaseConfig as firebase };
