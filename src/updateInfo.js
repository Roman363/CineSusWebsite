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
    const initialProfileForm = document.querySelector("#updateAccount")
    initialProfileForm.addEventListener("submit", (event) => {
      event.preventDefault()
   

    const newUser = {
       firstName: initialProfileForm.firstName.value,
       lastName: initialProfileForm.lastName.value,
       address1: initialProfileForm.address1.value,
       address2: initialProfileForm.address2.value,
       city: initialProfileForm.city.value ,
       state: initialProfileForm.state.value,
       zip: initialProfileForm.zip.value,
       isAdmin: false
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
      location.href = "updateInfo.html"
    })
    .catch((error) => {
      console.log(error)
    })
    
  })

  }else {
    console.log("Signed Out")
  }
})

//Observer
onAuthStateChanged(auth, (user) => {
  
  if (user) {
    //User is signed in
    const uid = user.uid;
    console.log(uid)
    console.log("Signed In to " + user.displayName)
    document.getElementById('signedInHeader').style.display='none';
    document.getElementById('signedOutHeader').style.display='block';
    
  }else {
    console.log("Signed Out")
    document.getElementById('signedInHeader').style.display='block';
    document.getElementById('signedOutHeader').style.display='none';

   
  }
})

const signOutUserForm = document.querySelector("#signedOutHeader")
signOutUserForm.addEventListener("submit", (event)=> {
  event.preventDefault()

  signOut(auth)
  .then(() => {
    console.log("Signed out")
  }).catch((error) => {

  })
})

