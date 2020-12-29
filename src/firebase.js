import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD35wJuvGv4rVOzsJNuZv8yfjOWPeIHHD0",
  authDomain: "kjb-linkedin-clone.firebaseapp.com",
  projectId: "kjb-linkedin-clone",
  storageBucket: "kjb-linkedin-clone.appspot.com",
  messagingSenderId: "1069930730398",
  appId: "1:1069930730398:web:afe5ec0b574d8f482d3c8f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };