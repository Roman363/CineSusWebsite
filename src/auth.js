import { initializeApp } from "firebase/app"
import { getAuth,setPersistence, createUserWithEmailAndPassword,browserSessionPersistence, signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth'


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

// const createAccountForm = document.getElementById("createAccount")

// createAccountForm.addEventListener("submit", (event) =>
// {
//   event.preventDefault()

//   const name = createAccountForm.name.value
//   const email = createAccountForm.email.value
//   const pass = createAccountForm.password.value

//   setPersistence(auth, browserSessionPersistence)
//   .then(() =>{
//     //Promise returned by setPersistence
//     createUserWithEmailAndPassword(auth,email, pass)
//     .then((userCredential)=> {
//       const user = userCredential.user
//       console.log(user)
//       console.log(user.uid)
//       location.href = "createUser.html"
//     })
//   })
//   .catch((e)=>{
//     //Error from persistence caught
//     console.log(e)
//   })
// })

const signInForm = document.getElementById("signIn")
signInForm.addEventListener("submit", (event) =>{

  event.preventDefault()

  const email = signInForm.email.value
  const pass = signInForm.password.value
  console.log(email)
  console.log(pass)

  signInWithEmailAndPassword(auth,email,pass)
  .then((user) =>{
   console.log(user.displayName)
   console.log("Signed in 2")
   console.log(auth)
  })
  .catch((e)=>{
    console.log(e)
  })

})

// const signOutUserForm = document.querySelector("#signOut")
// signOutUserForm.addEventListener("submit", (event)=> {
//   event.preventDefault()

//   signOut(auth)
//   .then(() => {
//     console.log("Signed out")
//   }).catch((error) => {

//   })
// })

//Observer
// onAuthStateChanged(auth, (user) => {
  
//   if (user) {
//     //User is signed in
//     const uid = user.uid;
//     console.log(uid)
//     console.log("Signed In")
//   }else {
//     console.log("Signed Out")
//   }
// })