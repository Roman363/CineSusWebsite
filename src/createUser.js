import { initializeApp } from "firebase/app"
import { getAuth, browserSessionPersistence,setPersistence,createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {getFirestore } from 'firebase/firestore'


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

const createAccountForm = document.getElementById("createAccount")

createAccountForm.addEventListener("submit", (event) =>
{
   event.preventDefault()


  // const firstName = createAccountForm.firstName.value
  // const lastName = createAccountForm.lastName.value
  const email = createAccountForm.email.value
  const password = createAccountForm.password.value
  // const address1 = createAccountForm.address1.value
  // const address2 = createAccountForm.address2.value
  // const city = createAccountForm.city.value 
  // const state = createAccountForm.state.value
  // const zip = createAccountForm.zip.value

  setPersistence(auth, browserSessionPersistence)
  .then(() =>{
    //Promise returned by setPersistence
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential)=> {
      const user = userCredential.user
      console.log(user)
      console.log(user.uid)
      console.log("user created")

      location.href = "updateInfo.html"
    })
  })
  .catch((e)=>{
    //Error from persistence caught
    console.log(e)
  })
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

