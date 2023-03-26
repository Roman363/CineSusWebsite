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

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

const auth = getAuth(fireApp);

const db = getFirestore(fireApp);


//getting information
var dataArrayString = sessionStorage.getItem("dataArray")
var dataArray = JSON.parse(dataArrayString)

console.log(dataArray);

var movieDataString = sessionStorage.getItem("movieData")
var movieData = JSON.parse(movieDataString)

document.getElementById("purchasePageTitle").innerHTML = dataArray.movieTitle
document.getElementById("purchasePageDateAndTime").innerHTML = dataArray.weekDay + " | " + dataArray.movieTime
document.getElementById("purchasePageTotalTickets").innerHTML = dataArray["totalTickets"] + " Ticket(s)"

var imageLink = ""
for (let i = 0; i < movieData.length; i++) {
    if (movieData[i].title == dataArray["movieTitle"]) {
        imageLink = movieData[i].image_link
    }
    
}

document.getElementById("purchasePageImage").setAttribute("src", imageLink)

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





//uploading transactions to database
const transactionCollection = collection(db, 'transactions')


const transaction = {
  adultTickets: dataArray["adultTickets"],
  childTickets: dataArray["childTickets"],
  seniorTickets: dataArray["seniorTickets"],
  weekDay: dataArray["weekDay"],
  movie: dataArray["movieTitle"],
  time: dataArray["movieTime"],
  totalPrice: dataArray["total"]

}

addDoc(transactionCollection, transaction).then((doc) =>{
  console.log(doc)
}).catch((e) =>{
  console.log(e);
})