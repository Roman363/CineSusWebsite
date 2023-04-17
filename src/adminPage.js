import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged,signOut} from 'firebase/auth'
import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot, getDoc, Transaction} from "firebase/firestore"




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
//users data base
const db = getFirestore(fireApp);


//Observer
onAuthStateChanged(auth, (user) => {
  
  if (user) {

    //User is signed in. Dislpay which user is signed in
    const uid = user.uid;
    console.log(uid)
    console.log("Signed In to " + user.displayName)
    document.getElementById('signedInHeader').style.display='none';
    document.getElementById('signedOutHeader').style.display='block'; 

    //Checking if the user is an admin
    const userRef = doc(db, 'users', user.uid)
    getDoc(userRef).then((snapshot) => {
      var userData = snapshot.data()
      //if the user is an admin, display admin content
      if (userData.isAdmin) {
        document.getElementById('adminContent').style.display='block';
        document.getElementById('notAnAdmin').style.display='none';
      }

      //get transaction info
      const transactionsCollection = collection(db, 'transactions')
      //creating an array to store the transaction information
      var transactionsData = []
      //get the information from the database and save it to an array
      getDocs(transactionsCollection).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var data = doc.data();
          transactionsData.push(data)
        })

        var totalMoneyCollected = 0
        var totalTaxCollected = 0
        var totalTicketsSold = 0
        var totalMoneyDiscounted = 0
        document.getElementById("totalSales").innerHTML = "<tr> <td>Customer Name: </td> <td>Customer ID: </td> <td>Movie Title: </td> <td>Transaction Total: </td> <td>Transaction Tax: </td> <td>Total Tickets: </td> <td>Money Discounted: </td>  </tr>"
        transactionsData.forEach(transaction => {
          var customerName = transaction.customerName
          var customerId = transaction.customerId
          var movieTitle = transaction.movie
          var transactionTotal = transaction.totalPrice
          var transactionTax = transaction.tax
          var transactionTickets = transaction.totalTickets
          var transactionDiscount = transaction.discountAmount
          
          document.getElementById("totalSales").innerHTML += "<tr> <td>" + customerName + "</td> <td>" + customerId + "</td> <td>" + movieTitle + "</td> <td>" + transactionTotal + "</td> <td>" + transactionTax + "</td> <td>" + transactionTickets + "</td> <td>" + transactionDiscount + "</td> </tr>"

          totalMoneyCollected += parseFloat(transactionTotal)
          totalTaxCollected += parseFloat(transactionTax)
          totalTicketsSold += parseInt(transactionTickets)
          totalMoneyDiscounted += parseFloat(transactionDiscount)

          
        });
        document.getElementById("totalSales").innerHTML += "<br> <Strong>Total Money Collected: "+ totalMoneyCollected.toFixed(2) +"</Strong>" + "<br> <Strong>Total Tax Collected: "+ totalTaxCollected.toFixed(2) +"</Strong>" + "<br> <Strong>Total Tickets Sold: "+ totalTicketsSold +"</Strong>" + "<br> <Strong>Total Money Discounted : "+ totalMoneyDiscounted.toFixed(2) +"</Strong>"

      })

    })




    
  }else {
    console.log("Signed Out")
    document.getElementById('signedInHeader').style.display='block';
    document.getElementById('signedOutHeader').style.display='none';
    document.getElementById('adminContent').style.display='none';
    document.getElementById('notAnAdmin').style.display='block';
    

  }
})





const signOutUserForm = document.querySelector("#signedOutHeader")
if(signOutUserForm){
  signOutUserForm.addEventListener("submit", (event)=> {
    event.preventDefault()
  
    signOut(auth)
    .then(() => {
      console.log("Signed out")
    }).catch((error) => {
  
    })
  })
}