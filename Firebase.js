// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGMoOnQCpppxajzAOVDhVaelNcFRHKJY",
  authDomain: "fir-music-3f407.firebaseapp.com",
  projectId: "fir-music-3f407",
  storageBucket: "fir-music-3f407.appspot.com",
  messagingSenderId: "978042960093",
  appId: "1:978042960093:web:1d24057ae7030ba90a8334"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}else
{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth};