// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXI-9ILcPoae77K-uWRYZ1Eypurp7jTWI",
  authDomain: "new-home-d23bf.firebaseapp.com",
  projectId: "new-home-d23bf",
  storageBucket: "new-home-d23bf.firebasestorage.app",
  messagingSenderId: "208054174954",
  appId: "1:208054174954:web:6a0062c3609d2a3c8ec393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export  const auth = getAuth(app);