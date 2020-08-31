import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

  // Your web app's Firebase configuration
  export const fbConfig = {
    apiKey: "AIzaSyBLeIWrBHSxVpYiqjttS5_RskgxzbPhJhw",
    authDomain: "notes-manager-d2338.firebaseapp.com",
    databaseURL: "https://notes-manager-d2338.firebaseio.com",
    projectId: "notes-manager-d2338",
    storageBucket: "notes-manager-d2338.appspot.com",
    messagingSenderId: "100077126315",
    appId: "1:100077126315:web:4f41725e913ad856be6dee",
    measurementId: "G-7N66NH25XH"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore()

export default firebase