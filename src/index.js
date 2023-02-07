import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDCvtYHd4OQqhXG2HwR4UvLVd7j1EdVF9s",
  authDomain: "cookardas.firebaseapp.com",
  projectId: "cookardas",
  storageBucket: "cookardas.appspot.com",
  messagingSenderId: "1050950575232",
  appId: "1:1050950575232:web:e856df0dd922276669b265",
  measurementId: "G-6M5NYKDBHD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals(analytics);