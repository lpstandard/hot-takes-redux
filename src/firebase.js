import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_wTXdOF95lDCj_-UDXstOkkH5qE9XV0A",
  authDomain: "hot-takes-c43f4.firebaseapp.com",
  databaseURL: "https://hot-takes-c43f4.firebaseio.com",
  projectId: "hot-takes-c43f4",
  storageBucket: "hot-takes-c43f4.appspot.com",
  messagingSenderId: "1002996230154"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
