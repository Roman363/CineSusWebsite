import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged,signOut} from 'firebase/auth'
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot,} from "firebase/firestore"




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

var discountCodesString = sessionStorage.getItem('discountCodes')
var discountCodes = JSON.parse(discountCodesString)




//Observer
onAuthStateChanged(auth, (user) => {
  
  if (user) {
    //User is signed in
    const uid = user.uid;
    console.log(uid)
    console.log("Signed In to " + user.displayName)
    document.getElementById('signedInHeader').style.display='none';
    document.getElementById('signedOutHeader').style.display='block';
    // Show signed-in content
    document.getElementById('rewardsPageSignedIn').style.display = 'block';
    document.getElementById('rewardsPageSignedOut').style.display = 'none';
    document.getElementById("rewardsPageUsername").innerHTML = user.displayName

    //update the discount code
    document.getElementById("discount100").addEventListener("click", function(e){
      sessionStorage.setItem("discount", JSON.stringify("discount100"))
      document.getElementById("codeSelected").innerHTML = "You have selected the 100% discount, go to checkout to get your discount"
    })
    document.getElementById("discount50").addEventListener("click", function(e){
      sessionStorage.setItem("discount", JSON.stringify("discount50"))
      document.getElementById("codeSelected").innerHTML = "You have selected the 100% discount, go to checkout to get your discount"
    })
    document.getElementById("discount25").addEventListener("click", function(e){
      sessionStorage.setItem("discount", JSON.stringify("discount25"))
      document.getElementById("codeSelected").innerHTML = "You have selected the 100% discount, go to checkout to get your discount"
    })
    document.getElementById("removeDiscount").addEventListener("click", function(e){
      sessionStorage.removeItem("discount")
      document.getElementById("codeSelected").innerHTML = "No discounts currently selected"
    })
    
  }else {
    console.log("Signed Out")
    document.getElementById('signedInHeader').style.display='block';
    document.getElementById('signedOutHeader').style.display='none';
    // Show non-signed-in content
    document.getElementById('rewardsPageSignedIn').style.display = 'none';
    document.getElementById('rewardsPageSignedOut').style.display = 'block';

   
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
