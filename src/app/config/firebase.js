import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaSv_uWp_qGpu90s3xOlm2XBUT4AQ_23c",
  authDomain: "eventigo-299012.firebaseapp.com",
  projectId: "eventigo-299012",
  storageBucket: "eventigo-299012.appspot.com",
  messagingSenderId: "326632762539",
  appId: "1:326632762539:web:3acd35bc6655b3cee25bee",
  measurementId: "G-EBQCC8Q13M",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
