// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgWULbdp5K1E5IujwXCS1BJlDso8ZZseM',
  authDomain: 'talent-hunt-30207.firebaseapp.com',
  projectId: 'talent-hunt-30207',
  storageBucket: 'talent-hunt-30207.appspot.com',
  messagingSenderId: '468544007512',
  appId: '1:468544007512:web:04f6080976cf89069e892d',
  measurementId: 'G-0E71SL0HFH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
