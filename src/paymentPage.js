import { initializeApp } from "firebase/app"
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from "firebase/firestore"
import { getAuth,onAuthStateChanged} from 'firebase/auth'




//getting information
var dataArrayString = sessionStorage.getItem("dataArray")
var dataArray = JSON.parse(dataArrayString)

var movieDataString = sessionStorage.getItem('movieData')
var movieData = JSON.parse(movieDataString)

console.log(dataArray);
console.log(movieData);


// calculating total
var childTickets = dataArray["childTickets"]
var adultTickets = dataArray["adultTickets"]
var elderTickets = dataArray["seniorTickets"]




var totalTickets = parseInt(childTickets) + parseInt(adultTickets) + parseInt(elderTickets)
var subtotal = totalTickets * 7.99
var tax = (subtotal * 0.0825) // tax amount based on texas
var total = (subtotal + tax)

tax = tax.toFixed(2)
total = total.toFixed(2)

console.log(total);

//replacing the placeholder info to the actual info
document.getElementById("subTotal").innerHTML = subtotal.toString()
document.getElementById("tax").innerHTML = tax
document.getElementById("total").innerHTML = total
document.getElementById("paymentPageTitle").innerHTML = dataArray["movieName"]
document.getElementById("paymentPageDateAndTime").innerHTML = dataArray["weekDay"] + " | " + dataArray["movieTime"]
document.getElementById("paymentPagePriceAndAmount").innerHTML = "$" + total + "&emsp;" + totalTickets




var imageLink = ""
for (let i = 0; i < movieData.length; i++) {
  if (movieData[i]["title"] == dataArray["movieName"]) {
      imageLink = movieData[i]["image_link"]
  }
}
console.log(imageLink);

document.getElementById("paymentPageImage").setAttribute("src", imageLink)


dataArray["totalTickets"] = totalTickets
dataArray["total"] = total

console.log(dataArray);



//sending the information
sessionStorage.setItem("dataArray", JSON.stringify(dataArray))




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw",
  authDomain: "team-5-7b28e.firebaseapp.com",
  projectId: "team-5-7b28e",
  storageBucket: "team-5-7b28e.appspot.com",
  messagingSenderId: "638627407505",
  appId: "1:638627407505:web:390587f6f32e9467784130"
};

// //from the get method, find out what movie the user wants to see information from
// const movieName = new URLSearchParams(window.location.search).get('movieName')
// console.log(movieName); 

// // Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

const auth = getAuth(fireApp);

// const db = getFirestore(fireApp);
// const movieCollection = collection(db, 'movie_info')





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
