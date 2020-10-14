import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzzTmKE2f1pmsYUQsN3dc24qXLMXkGW8g",
  authDomain: "clone-6ad1d.firebaseapp.com",
  databaseURL: "https://clone-6ad1d.firebaseio.com",
  projectId: "clone-6ad1d",
  storageBucket: "clone-6ad1d.appspot.com",
  messagingSenderId: "835629560228",
  appId: "1:835629560228:web:d3ebc6212d353bd7d79131",
  measurementId: "G-C61Q4FZFK4",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };