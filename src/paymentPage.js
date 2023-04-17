import { initializeApp } from "firebase/app"
import { getAuth,onAuthStateChanged,signOut} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw",
  authDomain: "team-5-7b28e.firebaseapp.com",
  projectId: "team-5-7b28e",
  storageBucket: "team-5-7b28e.appspot.com",
  messagingSenderId: "638627407505",
  appId: "1:638627407505:web:390587f6f32e9467784130"
};


// // Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

const auth = getAuth(fireApp);
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



//getting information
var dataArrayString = sessionStorage.getItem("dataArray")
var dataArray = JSON.parse(dataArrayString)

var movieDataString = sessionStorage.getItem('movieData')
var movieData = JSON.parse(movieDataString)

var discountString = sessionStorage.getItem('discount')
var discount = JSON.parse(discountString)


console.log(discount);





console.log(dataArray);
console.log(movieData);
//empty cart 
if(!dataArray){
  document.getElementById('fullCart').style.display='none';
  document.getElementById('emptyCart').style.display='block';
}else {
  document.getElementById('fullCart').style.display='block';
  document.getElementById('emptyCart').style.display='none';
}



// calculating total
var childTickets = dataArray["childTickets"]
var adultTickets = dataArray["adultTickets"]
var elderTickets = dataArray["seniorTickets"]


var totalTickets = parseInt(childTickets) + parseInt(adultTickets) + parseInt(elderTickets)
var subtotal = totalTickets * 7.99
var discountAmount = 0


if (discount == 'discount100') {
  discountAmount = subtotal
  subtotal = subtotal - discountAmount
}else if(discount == 'discount50'){
  discountAmount = subtotal * .5
  subtotal = subtotal - discountAmount
}else if(discount == 'discount25'){
  discountAmount = subtotal * .25
  subtotal = subtotal - discountAmount
}

//weekday discount
if (dataArray["movieDate"] == "Tuesday") {
  discountAmount =  discountAmount + (subtotal * .5)
  subtotal = subtotal * .5
}

subtotal = parseFloat(parseFloat(subtotal).toFixed(2))



var tax = (subtotal * 0.0825) // tax amount based on texas
var total = (subtotal + tax)

tax = tax.toFixed(2)
total = parseFloat(total)
total = total.toFixed(2)

console.log(discountAmount);
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


dataArray["totalTickets"] = totalTickets.toString()
dataArray["total"] = total
dataArray["tax"] = tax
dataArray["discountAmount"] = discountAmount.toFixed(2)

console.log(dataArray);



//sending the information
sessionStorage.setItem("dataArray", JSON.stringify(dataArray))

