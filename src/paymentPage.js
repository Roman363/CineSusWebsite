import { initializeApp } from "firebase/app"
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from "firebase/firestore"


// calculating total
var childTickets = new URLSearchParams(window.location.search).get('childTickets')
var adultTickets = new URLSearchParams(window.location.search).get('adultTickets')
var elderTickets = new URLSearchParams(window.location.search).get('elderTickets')

if (childTickets == null) {
    childTickets = 0
}
if (adultTickets == null) {
    adultTickets = 0
}
if (elderTickets == null) {
    elderTickets = 0
}



var totalTickets = parseInt(childTickets) + parseInt(adultTickets) + parseInt(elderTickets)
var subtotal = totalTickets * 7.99
var tax = (subtotal * 0.0825) // tax amount based on texas
var total = (subtotal + tax)


console.log(totalTickets);

//replacing the placeholder info to the actual info
document.getElementById("subTotal").innerHTML = subtotal.toString()
document.getElementById("tax").innerHTML = tax.toFixed(2)
document.getElementById("total").innerHTML = total.toFixed(2)



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
        document.getElementById("movieInfoPayment").innerHTML = movieData.title + " | " + movieData.rating + " | " + movieData.review
        document.getElementById("displayMovie").setAttribute("src", movieData.image_link)
        document.getElementById("currentMovieGet").setAttribute("value", movieData.title)
    })
    .catch(err => {
        console.log(err.message)
    })



