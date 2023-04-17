
//retrieving information from previous page (movieSelect)
const movieName = new URLSearchParams(window.location.search).get('movieName')
const movieTime = new URLSearchParams(window.location.search).get('movieTime')

var weekDayString = sessionStorage.getItem('weekDay')
var weekDay = JSON.parse(weekDayString)

/* var ticketsArrayString = document.getElementById('ticketAmount')
var ticketsArray = JSON.parse(ticketsArrayString)
console.log(ticketsArray); */


//creating dataArray with information of the movieSelect page (movie name, movie time, weekday, tickets)
//var dataArray = {"movieName":movieName, "movieTime": movieTime, "weekDay":weekDay, "adultTickets": ticketsArray[0], "childTickets": ticketsArray[1], "seniorTickets": ticketsArray[2], "discount": ""}
var dataArray = {"movieName":movieName, "movieTime": movieTime, "weekDay":weekDay, "discount": ""}
dataArray["adultTickets"] = document.getElementById("adultTickets").value;
dataArray["childTickets"] = document.getElementById("childTickets").value;
dataArray["seniorTickets"] = document.getElementById("seniorTickets").value;
console.log(dataArray);

//sending the information
sessionStorage.setItem("dataArray", JSON.stringify(dataArray))
var total = JSON.stringify(parseInt(dataArray['adultTickets']) + parseInt(dataArray['childTickets']) + parseInt(dataArray['seniorTickets']))

//updating seating information @ top of page
const seatingGrid = document.querySelector(".seating-grid");
const seats = document.querySelectorAll(".seating-grid .detailPageRow .seat:not(.unavailable)");
const selectedMovie = document.getElementById("movie-title").innerHTML = dataArray['movieName']
const selectedWeekday = document.getElementById("weekDay").innerHTML = dataArray['weekDay']
const selectedTime = document.getElementById("time").innerHTML = dataArray['movieTime']
var count = document.getElementById("tickets-left").innerHTML = total
var selected = 0
var newSeats = 0


//retrieving seating indexes based on selected seats
function mappingSeats(){
    const selectedSeats = document.querySelectorAll('.seating-grid .selected');
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
    dataArray['adultTickets'] = document.getElementById("adultTickets").value;
    dataArray['childTickets'] = document.getElementById("childTickets").value;
    dataArray['seniorTickets'] = document.getElementById("seniorTickets").value;
    return dataArray;
}

//updates the counter that tells user how many tickets are left to select
function updateSelectedCount(){
    var selectedSeats = mappingSeats();
    const selectedSeatsCount = selectedSeats.length;
    var left = parseInt(total) - parseInt(selectedSeatsCount)
    count = document.getElementById("tickets-left").innerHTML = left;
    selected = selectedSeatsCount
    return selected;
}

//listens for any seat selection/change that happens
seatingGrid.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('unavailable') && count != 0
    ){
        e.target.classList.toggle('selected');
        //toggles from unselected -> selected and vice versa for every click
        toggleItem(e);
        //updates seating information and prints to console updated dataArray
        updateSelectedCount();
        newSeats = mappingSeats();
        console.log(updateDataArray(newSeats));
        
    }
    else{
        if(e.target.classList.contains('selected')){
            e.target.classList.toggle('selected');
            toggleItem(e);
            updateSelectedCount();
        }
    }
});

ticketAmount.addEventListener('change', (e) => {
    total = parseInt(document.getElementById("adultTickets").value) + parseInt(document.getElementById("childTickets").value) + parseInt(document.getElementById("seniorTickets").value)
    updateSelectedCount();
    newSeats = mappingSeats();
    console.log(updateDataArray(newSeats));
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
    if(total === updateSelectedCount() && total != 0 && updateSelectedCount() != 0) {
        event.preventDefault();
        console.log(dataArray);
        sessionStorage.setItem('dataArray', JSON.stringify(dataArray));
        window.location.href = 'paymentPage.html'
    }
    else{
        if(total === 0 && updateSelectedCount() === 0){
            alert("Nothing has been selected. Please select at least one ticket and one seat.");
            event.preventDefault();
            console.log(dataArray);
            sessionStorage.setItem('dataArray', JSON.stringify(dataArray));
        }
        else{
            alert("Make sure seats match number of tickets.")
            event.preventDefault();
            console.log(dataArray);
            sessionStorage.setItem('dataArray', JSON.stringify(dataArray));
        }
    }
    

});