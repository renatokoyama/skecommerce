import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBg2Rpf9o-s1onId8oCaDjQ3VUtTCTiTv8",
  authDomain: "skecommerce-db.firebaseapp.com",
  databaseURL: "https://skecommerce-db.firebaseio.com",
  projectId: "skecommerce-db",
  storageBucket: "skecommerce-db.appspot.com",
  messagingSenderId: "615459584361",
  appId: "1:615459584361:web:b2f2b8e09e25065ed225f8",
  measurementId: "G-9W9Y6STFDK",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
