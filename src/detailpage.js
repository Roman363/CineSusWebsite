// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { addDoc, collection,deleteDoc,getDocs,getFirestore,doc,updateDoc } from 'firebase/firestore'
import {onAuthStateChanged} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw",
  authDomain: "team-5-7b28e.firebaseapp.com",
  projectId: "team-5-7b28e",
  storageBucket: "team-5-7b28e.appspot.com",
  messagingSenderId: "638627407505",
  appId: "1:638627407505:web:390587f6f32e9467784130"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()