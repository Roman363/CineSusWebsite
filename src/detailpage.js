
//retrieving information from previous page (movieSelect)
const movieName = new URLSearchParams(window.location.search).get('movieName')
const movieTime = new URLSearchParams(window.location.search).get('movieTime')

var weekDayString = sessionStorage.getItem('weekDay')
var weekDay = JSON.parse(weekDayString)

var ticketsArrayString = sessionStorage.getItem("ticketsArray")
var ticketsArray = JSON.parse(ticketsArrayString)

//creating dataArray with information of the movieSelect page (movie name, movie time, weekday, tickets)
var dataArray = {"movieName":movieName, "movieTime": movieTime, "weekDay":weekDay, "adultTickets": ticketsArray[0], "childTickets": ticketsArray[1], "seniorTickets": ticketsArray[2]}
console.log(dataArray);

//getting total selected tickets
var total = parseInt(dataArray['adultTickets']) + parseInt(dataArray['childTickets']) + parseInt(dataArray['seniorTickets'])

//updating seating information @ top of page
const seatingGrid = document.querySelector(".seating-grid");
const seats = document.querySelectorAll(".seating-grid .row .seat:not(.unavailable)");
const selectedMovie = document.getElementById("movie-title").innerHTML = dataArray['movieName']
const selectedWeekday = document.getElementById("weekDay").innerHTML = dataArray['weekDay']
const selectedTime = document.getElementById("time").innerHTML = dataArray['movieTime']
var count = document.getElementById("tickets-left").innerHTML = total
var selected = 0;


//retrieving seating indexes based on selected seats
function mappingSeats(){
    const selectedSeats = document.querySelectorAll('.seating-grid .selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    var seatData = []
    for(let i = 0; i < selectedSeats.length; i++){
        const text = selectedSeats[i].innerText;
        seatData.push(text);
    }
    const json = JSON.stringify(seatData);
    localStorage.setItem('seatData', json);

    //calls function to update the seat information inside dataArray
    updateDataArray(seatData);
    return seatData;
}

//updates the seat information inside dataArray
function updateDataArray(seatData){
    dataArray['seats'] = seatData;
    return dataArray;
}


//updates the counter that tells user how many tickets are left to select
function updateSelectedCount(){
    var selectedSeats = mappingSeats();
    const selectedSeatsCount = selectedSeats.length;
    var left = parseInt(total) - parseInt(selectedSeatsCount)
    count = document.getElementById("tickets-left").innerHTML = left;
    selected = selectedSeatsCount
    
}

//listens for any seat selection/change that happens
seatingGrid.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('unavailable')
    ){
        e.target.classList.toggle('selected')
        
        //toggles from unselected -> selected and vice versa for every click
        toggleItem(e);

        //updates seating information and prints to console updated dataArray
        updateSelectedCount()
        var newSeats = mappingSeats()
        console.log(updateDataArray(newSeats));
        
    }
});

//toggles seat status when seats are clicked
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

//submits dataArray to paymentPage, and confirms seat selection
const myForm = document.querySelector('#seats')
myForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(dataArray);
    sessionStorage.setItem('dataArray', JSON.stringify(dataArray));
    window.location.href = 'paymentPage.html'

});





