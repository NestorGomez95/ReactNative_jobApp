import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgwTmTYjakYQk5H9Nk26Bp7BWiVrQrpl0",
  authDomain: "allianceapp-fb4c4.firebaseapp.com",
  projectId: "allianceapp-fb4c4",
  storageBucket: "allianceapp-fb4c4.appspot.com",
  messagingSenderId: "899545680072",
  appId: "1:899545680072:android:2a4bf95a24b8247e35fdfd"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
