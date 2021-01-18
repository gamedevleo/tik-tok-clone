import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDU54kGsrYe0H8KbfsX-6DWgIJzAlna8y0",
  authDomain: "tiktok-clone-a8b50.firebaseapp.com",
  projectId: "tiktok-clone-a8b50",
  storageBucket: "tiktok-clone-a8b50.appspot.com",
  messagingSenderId: "140548777042",
  appId: "1:140548777042:web:5c1b030dc8defc3184ab8b"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
