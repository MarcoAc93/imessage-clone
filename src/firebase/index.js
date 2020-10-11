import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAANCsn1QtIFSC4t38il7Jt3kFqgRBqjiM",
  authDomain: "imessage-clone-react.firebaseapp.com",
  databaseURL: "https://imessage-clone-react.firebaseio.com",
  projectId: "imessage-clone-react",
  storageBucket: "imessage-clone-react.appspot.com",
  messagingSenderId: "291692036727",
  appId: "1:291692036727:web:35af519fd9fe4e612afc72"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
