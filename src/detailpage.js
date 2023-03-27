// import { initializeApp } from "firebase/app"
// import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from "firebase/firestore"
// import { getAuth, onAuthStateChanged} from 'firebase/auth'


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw",
//   authDomain: "team-5-7b28e.firebaseapp.com",
//   projectId: "team-5-7b28e",
//   storageBucket: "team-5-7b28e.appspot.com",
//   messagingSenderId: "638627407505",
//   appId: "1:638627407505:web:390587f6f32e9467784130"
// };

// //from the get method, find out what movie the user wants to see information from
// const movieName = new URLSearchParams(window.location.search).get('movieName')
// console.log(movieName); 
// const movieTime = new URLSearchParams(window.location.search).get('movieTime')
// console.log(movieTime); 

// // Initialize Firebase
// const fireApp = initializeApp(firebaseConfig);
// const auth = getAuth(fireApp);
// const db = getFirestore(fireApp);
// const movieCollection = collection(db, 'movie_info')

// //replace the placeholder info to the actual movie info
// getDocs(movieCollection)
//     .then((snapshot) => {
//         var movieData = ""
//         snapshot.docs.forEach((doc) => {
//             if (doc.data().title == movieName) {
//                 movieData = doc.data()
//             }
//         })
//         document.getElementById("movie-title").innerHTML = movieData.title
//         document.getElementById("movie-rating").innerHTML = movieData.rating + " |"
//         document.getElementById("movie-review").innerHTML = movieData.review + " |"
//         document.getElementById("movie-description").innerHTML = movieData.description + " |"
//         document.getElementById("movie-length").innerHTML = movieData.length + " |"
//         document.getElementById("movie-year").innerHTML = movieData.year
//         document.getElementById("methodMovieImage").setAttribute("src", movieData.image_link)
//         document.getElementById("currentMovieGet").setAttribute("value", movieData.title)
        

        
        

//     })
//     .catch(err => {
//         console.log(err.message)
//     })


    //Observer
// onAuthStateChanged(auth, (user) => {
  
//     if (user) {
//       //User is signed in
//       const uid = user.uid;
//       console.log(uid)
//       console.log("Signed In to " + user.displayName)
//     }else {
//       console.log("Signed Out")
//     }
//   })



const movieName = new URLSearchParams(window.location.search).get('movieName')
const movieTime = new URLSearchParams(window.location.search).get('movieTime')

var weekDayString = sessionStorage.getItem('weekDay')
var weekDay = JSON.parse(weekDayString)

var ticketsArrayString = sessionStorage.getItem("ticketsArray")
var ticketsArray = JSON.parse(ticketsArrayString)

//merging the array
//USE THIS ARRAY
var dataArray = {"movieName":movieName, "movieTime": movieTime, "weekDay":weekDay, "adultTickets": ticketsArray[0], "childTickets": ticketsArray[1], "seniorTickets": ticketsArray[2]}
console.log(dataArray);

//sending the information
sessionStorage.setItem("dataArray", JSON.stringify(dataArray))

var total = JSON.stringify(parseInt(dataArray['adultTickets']) + parseInt(dataArray['childTickets']) + parseInt(dataArray['seniorTickets']))



const seatingGrid = document.querySelector(".seating-grid");
const seats = document.querySelectorAll(".seating-grid .row .seat:not(.unavailable)");
const selectedMovie = document.getElementById("movie-title").innerHTML = dataArray['movieName']
const selectedWeekday = document.getElementById("weekDay").innerHTML = dataArray['weekDay']
const selectedTime = document.getElementById("time").innerHTML = dataArray['movieTime']
var count = document.getElementById("tickets-left").innerHTML = total



function totalSeats(){
    const totalSeats = document.querySelectorAll('.seating-grid .row .seat');
    return totalSeats.length;
}
function mappingSeats(){
    const selectedSeats = document.querySelectorAll('.seating-grid .selected');
    const rows = document.querySelectorAll('.seating-grid .row');
    var columns = document.querySelector('.seating-grid .row');
    columns = columns.querySelectorAll('*');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    var seatData = []
    for(let i = 0; i < selectedSeats.length; i++){
        const text = selectedSeats[i].innerText;
        seatData.push(text);
    }
    const json = JSON.stringify(seatData);
    localStorage.setItem('seatData', json);
    updateDataArray(seatData);
    return seatData;
}
function updateDataArray(seatData){
    dataArray['seats'] = seatData;
    return dataArray;
}

function updateSelectedCount(){
    var selectedSeats = mappingSeats();
    const selectedSeatsCount = selectedSeats.length;
    var left = JSON.stringify(parseInt(total) - parseInt(selectedSeatsCount))
    count = document.getElementById("tickets-left").innerHTML = left;
    
}

seatingGrid.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('unavailable')
    ){
        e.target.classList.toggle('selected')
        
        toggleItem(e);
        console.log(updateDataArray(mappingSeats()));
        
    }
});

function toggleItem(item) {
    var seatData = mappingSeats();
    const index = seatData.indexOf(item);
    if (index === -1){
        seatData.push(item);
    }
    else {
        seatData.splice(index, 1);
    }
}
const myForm = document.querySelector('#seats')

myForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(dataArray);
    sessionStorage.setItem('dataArray', JSON.stringify(dataArray));
    window.location.href = 'paymentPage.html'

});





