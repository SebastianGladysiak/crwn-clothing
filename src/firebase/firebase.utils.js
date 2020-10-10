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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
