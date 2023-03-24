import { initializeApp } from "firebase/app"
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
  module.exports = movieData


})
  .catch(err => {
  console.log(err.message)
})