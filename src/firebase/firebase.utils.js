import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDaRYb2F8feTELmy_pf91gdG8QTn44t8yg',
  authDomain: 'crown-db-c9a37.firebaseapp.com',
  databaseURL: 'https://crown-db-c9a37.firebaseio.com',
  projectId: 'crown-db-c9a37',
  storageBucket: 'crown-db-c9a37.appspot.com',
  messagingSenderId: '621581249534',
  appId: '1:621581249534:web:83090b103f8cdcea1daeaf',
  measurementId: 'G-Y7JXHDJC30',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
