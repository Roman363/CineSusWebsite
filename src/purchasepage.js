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


var movieDataString = sessionStorage.getItem("movieData")
var movieData = JSON.parse(movieDataString)

console.log(dataArray);
console.log(movieData);



document.getElementById("purchasePageTitle").innerHTML = dataArray.movieName
document.getElementById("purchasePageDateAndTime").innerHTML = dataArray.weekDay + " | " + dataArray.movieTime
document.getElementById("purchasePageTotalTickets").innerHTML = dataArray["totalTickets"] + " Ticket(s)"

var imageLink = ""
for (let i = 0; i < movieData.length; i++) {
  if (movieData[i]["title"] == dataArray["movieName"]) {
      imageLink = movieData[i]["image_link"]
  }
}

document.getElementById("purchasePageImage").setAttribute("src", imageLink)






console.log(dataArray);
//uploading transactions to database
const transactionCollection = collection(db, 'transactions')


const transaction = {
  adultTickets: dataArray["adultTickets"],
  childTickets: dataArray["childTickets"],
  seniorTickets: dataArray["seniorTickets"],
  weekDay: dataArray["weekDay"],
  movie: dataArray["movieName"],
  time: dataArray["movieTime"],
  totalPrice: dataArray["total"]

}

addDoc(transactionCollection, transaction).then((doc) =>{
  console.log(doc)
}).catch((e) =>{
  console.log(e);
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

sessionStorage.removeItem("discount")
