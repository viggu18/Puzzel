import * as firebase from 'firebase';

//firebaseConfig here... 

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;
