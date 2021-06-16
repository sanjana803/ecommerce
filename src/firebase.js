import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYZ1S7KBxnwkNHFmTHFB-YGjgl77QdabA",
  authDomain: "ecommerce-e9a03.firebaseapp.com",
  projectId: "ecommerce-e9a03",
  storageBucket: "ecommerce-e9a03.appspot.com",
  messagingSenderId: "724057369292",
  appId: "1:724057369292:web:0a07315892bf91d44a7069",
  measurementId: "G-LF82339Z07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };