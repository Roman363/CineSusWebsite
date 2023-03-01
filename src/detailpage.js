import { initializeApp } from "firebase/app"
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from "firebase/firestore"


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
        document.getElementById("movie-title").innerHTML = movieData.title
        document.getElementById("movie-rating").innerHTML = movieData.rating + " |"
        document.getElementById("movie-review").innerHTML = movieData.review + " |"
        document.getElementById("movie-description").innerHTML = movieData.description + " |"
        document.getElementById("movie-length").innerHTML = movieData.length + " |"
        document.getElementById("movie-year").innerHTML = movieData.year
        document.getElementById("methodMovieImage").setAttribute("src", movieData.image_link)
        document.getElementById("currentMovieGet").setAttribute("value", movieData.title)
        

        
        

    })
    .catch(err => {
        console.log(err.message)
    })

