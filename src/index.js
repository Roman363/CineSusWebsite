import { initializeApp } from "firebase/app"
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged,signOut} from 'firebase/auth'






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

//accessing the database
const db = getFirestore(fireApp);
const movieCollection = collection(db, 'movie_info')




//making a function to get all the information of the movies from the database
function gatherMovieInformation(){
  //get the information from the database and save it to an array
  var movieData = []
  getDocs(movieCollection)
  .then((snapshot) => {
    
    snapshot.docs.forEach((doc) => {
      movieData.push(doc.id) 
    })
  })
    .catch(err => {
    console.log(err.message)
  })

  return movieData
  
}


//create an array to save all the movies data
var movieData = []

//if the array is empty that means that its the first time entering the page. if so, we wpopulate the array
if (movieData.length == 0){
  movieData = gatherMovieInformation()
}

console.log(movieData);
console.log(movieData[0]);



//replace the placeholder information with the informtion from the databse
// document.getElementById("indexMovie1Details").innerHTML = movieData




















//Observer
onAuthStateChanged(auth, (user) => {
  
  if (user) {
    //User is signed in
    const uid = user.uid;
    console.log(uid)
    console.log("Signed In to " + user.displayName)
  }else {
    console.log("Signed Out")
  }
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
