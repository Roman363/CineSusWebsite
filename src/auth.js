
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
   location.href = "index.html"
  })
  .catch((e)=>{
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
