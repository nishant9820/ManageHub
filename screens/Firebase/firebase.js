import firebase from "firebase/compat";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjSmx7tVBZcXmL0VBnAZZHYHaUv9UmyPE",
  authDomain: "fir-auth-6de62.firebaseapp.com",
  projectId: "fir-auth-6de62",
  storageBucket: "fir-auth-6de62.appspot.com",
  messagingSenderId: "25007599710",
  appId: "1:25007599710:web:c8db7ec090ff5df95644cf",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const db = getFirestore();
// const auth = getAuth();
// export default app;
// export { auth, db };
