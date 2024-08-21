import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyAK94R7SkqelLv0dzhV86O1T5fXHF8osaA",
  authDomain: "coder-liset.firebaseapp.com",
  projectId: "coder-liset",
  storageBucket: "coder-liset.appspot.com",
  messagingSenderId: "911962301089",
  appId: "1:911962301089:web:5b1e7369df660deff0c6e0"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
