import { initializeApp } from "firebase/app"
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw",
  authDomain: "team-5-7b28e.firebaseapp.com",
  projectId: "team-5-7b28e",
  storageBucket: "team-5-7b28e.appspot.com",
  messagingSenderId: "638627407505",
  appId: "1:638627407505:web:390587f6f32e9467784130"
};

//from the get method, find out what movie the user wants to see information from
const movieName = new URLSearchParams(window.location.search).get('movieName')
console.log(movieName); 

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

const auth = getAuth(fireApp);

const db = getFirestore(fireApp);
const movieCollection = collection(db, 'movie_info')

//replace the placeholder info to the actual movie info
getDocs(movieCollection)
    .then((snapshot) => {
        var movieData = ""
        snapshot.docs.forEach((doc) => {
            if (doc.data().title == movieName) {
                movieData = doc.data()
            }
        })
        document.getElementById("purchasedMovie").innerHTML = movieData.title + " | " + movieData.range + " | " + movieData.review
        document.getElementById("purchasedMovieImage").setAttribute("src", movieData.image_link)
        

        
        

    })
    .catch(err => {
        console.log(err.message)
    })

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