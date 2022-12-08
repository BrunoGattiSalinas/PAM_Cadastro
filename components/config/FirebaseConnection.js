import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAjUVXCnIqQ9bB7BjyiElQ-97TiWbRF2eo",
  authDomain: "pam-cadastro.firebaseapp.com",
  projectId: "pam-cadastro",
  storageBucket: "pam-cadastro.appspot.com",
  messagingSenderId: "691213589627",
  appId: "1:691213589627:web:5beb578d98202c754356de",
  measurementId: "G-LP0MYTTSWY"
};

if(!firebase.app.lenght == 0){
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
}

export default firebase;