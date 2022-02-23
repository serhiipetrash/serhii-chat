import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB55wsE0DehqehWJ-2n_ASNLsBEqkwg544',
  authDomain: 'udemyvue-6d96b.firebaseapp.com',
  projectId: 'udemyvue-6d96b',
  storageBucket: 'udemyvue-6d96b.appspot.com',
  messagingSenderId: '368177863676',
  appId: '1:368177863676:web:58af5d8d2c46c9b2327079',
};
// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
