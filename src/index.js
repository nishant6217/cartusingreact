import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

import 'firebase/firestore' ;


const firebaseConfig = {

  // Your web app's Firebase configuration
  
    apiKey: "AIzaSyBa_D0pRmkNTBu-2xNik-0v-8jHol8rosg",
    authDomain: "cart-4e68b.firebaseapp.com",
    databaseURL :"https://cart-4e68b.firebaseio.com" ,
    projectId: "cart-4e68b",
    storageBucket: "cart-4e68b.appspot.com",
    messagingSenderId: "891501897583",
    appId: "1:891501897583:web:1a96b44e2766e27728aa9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister() ;

