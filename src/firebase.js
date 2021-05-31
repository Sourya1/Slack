import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDBqYta2cUfyqp6rnIPedMWhX4a1cfcBt8",
  authDomain: "slack-1dbfe.firebaseapp.com",
  projectId: "slack-1dbfe",
  storageBucket: "slack-1dbfe.appspot.com",
  messagingSenderId: "809505581351",
  appId: "1:809505581351:web:2e10cb575883cb09a66102"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
