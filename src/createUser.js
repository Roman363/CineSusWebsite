import { initializeApp } from "firebase/app"
import { getAuth, browserSessionPersistence,setPersistence,createUserWithEmailAndPassword} from 'firebase/auth'
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

  const firstName = createAccountForm.firstName.value
  const lastName = createAccountForm.lastName.value
  const email = createAccountForm.email.value
  const password = createAccountForm.password.value
  const address1 = createAccountForm.address1.value
  const address2 = createAccountForm.address2.value
  const city = createAccountForm.city.value 
  const state = createAccountForm.state.value
  const zip = createAccountForm.zip.value
  

  setPersistence(auth, browserSessionPersistence)
  .then(() =>{
    //Promise returned by setPersistence
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential)=> {
      const user = userCredential.user
      console.log(user)
      console.log(user.uid)
      console.log("user created")
    })
  })
  .catch((e)=>{
    //Error from persistence caught
    console.log(e)
  })
})

// onAuthStateChanged(auth, (user) => {
  
//   if (user) {
//    const uid = user.uid
//     console.log(uid)
//     const initialProfileForm = document.querySelector("#newUser")
//     initialProfileForm.addEventListener("submit", (event) => {
//       event.preventDefault()
   

//     const newUser = {
//       firstName: initialProfileForm.firstName.value,
//       email: initialProfileForm.email.value,
//       password: initialProfileForm.password.value,
//       address1: initialProfileForm.address1.value,
//       city: initialProfileForm.city.vlaue,
//       state: initialProfileForm.state.value,
//       zip: initialProfileForm.zip.value,
//       uid: uid

//     }

//     updateProfile(auth.currentUser,{
//       displayName: initialProfileForm.firstName.value
//     })
//     .then(() => {
//       //Promise
//       console.log("Updated profile")
//     })
//     .catch((e) => {
//       console.log(e)
//     })
//     console.log(auth.currentUser.displayName)
//     console.log(newUser)

//     const userDocRef = doc(db,"users", uid)

//     setDoc(userDocRef, newUser)
//     .then(() => {
//       console.log("New User Added")
//     })
//     .catch((error) => {
//       console.log(error)
//     })
    
//   })

//   }else {
//     console.log("Signed Out")
//   }
// })