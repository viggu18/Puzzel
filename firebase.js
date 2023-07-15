import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAfhATjSu0T7Aip51NIujkPpWH-HvskpS0",
  authDomain: "puzzel-12430.firebaseapp.com",
  projectId: "puzzel-12430",
  storageBucket: "puzzel-12430.appspot.com",
  messagingSenderId: "913757833278",
  appId: "1:913757833278:web:bfa1ba31df369f0dfea96f",
  measurementId: "G-E8LVMNE6LG"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;
