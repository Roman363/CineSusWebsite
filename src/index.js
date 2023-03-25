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






//accessing the database
const db = getFirestore(fireApp);
const movieCollection = collection(db, 'movie_info')


//creating an array to store the movie information
var movieData = []
//get the information from the database and save it to an array
getDocs(movieCollection).then((snapshot) => {
  
  snapshot.docs.forEach((doc) => {
    var data = doc.data();
    movieData.push(data)

  })
  //sharing this information across multiple pages
  sessionStorage.setItem('movieData', JSON.stringify(movieData))
  //details
  document.getElementById("indexMovie1Details").innerHTML = movieData[0].title + "<br>" + movieData[0].rating + " | " + movieData[0].length + " | " + movieData[0].review
  document.getElementById("indexMovie2Details").innerHTML = movieData[1].title + "<br>" + movieData[1].rating + " | " + movieData[1].length + " | " + movieData[1].review
  document.getElementById("indexMovie3Details").innerHTML = movieData[2].title + "<br>" + movieData[2].rating + " | " + movieData[2].length + " | " + movieData[2].review
  document.getElementById("indexMovie4Details").innerHTML = movieData[3].title + "<br>" + movieData[3].rating + " | " + movieData[3].length + " | " + movieData[3].review

  //images
  document.getElementById("indexMovie1Image").setAttribute("src", movieData[0].image_link)
  document.getElementById("indexMovie2Image").setAttribute("src", movieData[1].image_link)
  document.getElementById("indexMovie3Image").setAttribute("src", movieData[2].image_link)
  document.getElementById("indexMovie4Image").setAttribute("src", movieData[3].image_link)




})
  .catch(err => {
  console.log(err.message)
})






