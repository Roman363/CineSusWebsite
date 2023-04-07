/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/detailpage.js":
/*!***************************!*\
  !*** ./src/detailpage.js ***!
  \***************************/
/***/ (() => {

eval("\r\n//retrieving information from previous page (movieSelect)\r\nconst movieName = new URLSearchParams(window.location.search).get('movieName')\r\nconst movieTime = new URLSearchParams(window.location.search).get('movieTime')\r\n\r\nvar weekDayString = sessionStorage.getItem('weekDay')\r\nvar weekDay = JSON.parse(weekDayString)\r\n\r\nvar ticketsArrayString = sessionStorage.getItem(\"ticketsArray\")\r\nvar ticketsArray = JSON.parse(ticketsArrayString)\r\n\r\n//creating dataArray with information of the movieSelect page (movie name, movie time, weekday, tickets)\r\nvar dataArray = {\"movieName\":movieName, \"movieTime\": movieTime, \"weekDay\":weekDay, \"adultTickets\": ticketsArray[0], \"childTickets\": ticketsArray[1], \"seniorTickets\": ticketsArray[2], \"discount\": \"\"}\r\nconsole.log(dataArray);\r\n\r\n//sending the information\r\nsessionStorage.setItem(\"dataArray\", JSON.stringify(dataArray))\r\nvar total = JSON.stringify(parseInt(dataArray['adultTickets']) + parseInt(dataArray['childTickets']) + parseInt(dataArray['seniorTickets']))\r\n\r\n//updating seating information @ top of page\r\nconst seatingGrid = document.querySelector(\".seating-grid\");\r\nconst seats = document.querySelectorAll(\".seating-grid .detailPageRow .seat:not(.unavailable)\");\r\nconst selectedMovie = document.getElementById(\"movie-title\").innerHTML = dataArray['movieName']\r\nconst selectedWeekday = document.getElementById(\"weekDay\").innerHTML = dataArray['weekDay']\r\nconst selectedTime = document.getElementById(\"time\").innerHTML = dataArray['movieTime']\r\nvar count = document.getElementById(\"tickets-left\").innerHTML = total\r\nvar selected = 0\r\n\r\n\r\n//retrieving seating indexes based on selected seats\r\nfunction mappingSeats(){\r\n    const selectedSeats = document.querySelectorAll('.seating-grid .selected');\r\n    var seatData = []\r\n    for(let i = 0; i < selectedSeats.length; i++){\r\n        const text = selectedSeats[i].innerText;\r\n        seatData.push(text);\r\n    }\r\n    const json = JSON.stringify(seatData);\r\n    localStorage.setItem('seatData', json);\r\n    //calls function to update the seat information inside dataArray\r\n    updateDataArray(seatData);\r\n    return seatData;\r\n}\r\n\r\n//updates the seat information inside dataArray\r\nfunction updateDataArray(seatData){\r\n    dataArray['seats'] = seatData;\r\n    return dataArray;\r\n}\r\n\r\n//updates the counter that tells user how many tickets are left to select\r\nfunction updateSelectedCount(){\r\n    var selectedSeats = mappingSeats();\r\n    const selectedSeatsCount = selectedSeats.length;\r\n    var left = parseInt(total) - parseInt(selectedSeatsCount)\r\n    count = document.getElementById(\"tickets-left\").innerHTML = left;\r\n    selected = selectedSeatsCount\r\n}\r\n\r\n//listens for any seat selection/change that happens\r\nseatingGrid.addEventListener('click', e => {\r\n    if(\r\n        e.target.classList.contains('seat') &&\r\n        !e.target.classList.contains('unavailable')\r\n    ){\r\n        e.target.classList.toggle('selected')\r\n\r\n        //toggles from unselected -> selected and vice versa for every click\r\n        toggleItem(e);\r\n        //updates seating information and prints to console updated dataArray\r\n        updateSelectedCount()\r\n        var newSeats = mappingSeats()\r\n        console.log(updateDataArray(newSeats));\r\n        \r\n    }\r\n});\r\n\r\n//toggles seat status when seats are clicked\r\nfunction toggleItem(item) {\r\n    var seatData = mappingSeats();\r\n    const index = seatData.indexOf(item);\r\n    if (index === -1){\r\n        seatData.push(item);\r\n    }\r\n    else {\r\n        seatData.splice(index, 1);\r\n    }\r\n}\r\n\r\n//submits dataArray to paymentPage, and confirms seat selection\r\nconst myForm = document.querySelector('#seats')\r\nmyForm.addEventListener(\"submit\", (event)=> {\r\n    event.preventDefault();\r\n    console.log(dataArray);\r\n    sessionStorage.setItem('dataArray', JSON.stringify(dataArray));\r\n    window.location.href = 'paymentPage.html'\r\n\r\n});\r\n\n\n//# sourceURL=webpack://sprint2/./src/detailpage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/detailpage.js"]();
/******/ 	
/******/ })()
;