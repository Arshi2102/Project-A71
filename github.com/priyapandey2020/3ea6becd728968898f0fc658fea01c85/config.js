import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
   apiKey: "AIzaSyA-0huJaai3bxfmhLR4mW0O0Avnhx_IbsQ",
  authDomain: "complaint-7f227.firebaseapp.com",
  projectId: "complaint-7f227",
  storageBucket: "complaint-7f227.appspot.com",
  messagingSenderId: "454598909563",
  appId: "1:454598909563:web:4ed59540b1198a798d0cde",
  measurementId: "G-54QT41KD55"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

