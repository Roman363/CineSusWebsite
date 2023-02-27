import { initializeApp } from "firebase/app"
import { getAuth,onAuthStateChanged, updateProfile} from 'firebase/auth'
import {doc, getFirestore, setDoc} from 'firebase/firestore'


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
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  
  if (user) {
   const uid = user.uid
    console.log(uid)
    const initialProfileForm = document.querySelector("#newUser")
    initialProfileForm.addEventListener("submit", (event) => {
      event.preventDefault()
   

    const newUser = {
      firstName: initialProfileForm.firstName.value,
      lastName: initialProfileForm.lastName.value,
      dob: initialProfileForm.dob.value,
      deposit: initialProfileForm.deposit.value,
      uid: uid

    }

    updateProfile(auth.currentUser,{
      displayName: initialProfileForm.firstName.value
    })
    .then(() => {
      //Promise
      console.log("Updated profile")
    })
    .catch((e) => {
      console.log(e)
    })
    console.log(auth.currentUser.displayName)
    console.log(newUser)

    const userDocRef = doc(db,"users", uid)

    setDoc(userDocRef, newUser)
    .then(() => {
      console.log("New User Added")
    })
    .catch((error) => {
      console.log(error)
    })
    
  })

  }else {
    console.log("Signed Out")
  }
})