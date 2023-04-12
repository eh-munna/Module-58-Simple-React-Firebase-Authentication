// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHRaqKMbesBjAUzzBRkZfMrBUDooiZCsQ',
  authDomain: 'simple-firebase-9b05f.firebaseapp.com',
  projectId: 'simple-firebase-9b05f',
  storageBucket: 'simple-firebase-9b05f.appspot.com',
  messagingSenderId: '485014805174',
  appId: '1:485014805174:web:45e7c8fdbc494dba9e6417',
  measurementId: 'G-KNTWCJKWM3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
