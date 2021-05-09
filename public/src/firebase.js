import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALSVdXTfmgigJnWuvrh8eAtCs0jt2O5fo",
  authDomain: "disney-plus-clone-2021.firebaseapp.com",
  projectId: "disney-plus-clone-2021",
  storageBucket: "disney-plus-clone-2021.appspot.com",
  messagingSenderId: "716312372103",
  appId: "1:716312372103:web:2b23d1df63e7118a47e922",
  measurementId: "G-KD5JFW2SC3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
