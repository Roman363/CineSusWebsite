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

eval("// import { initializeApp } from \"firebase/app\"\r\n// import{ getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot} from \"firebase/firestore\"\r\n// import { getAuth, onAuthStateChanged} from 'firebase/auth'\r\n\r\n\r\n// // Your web app's Firebase configuration\r\n// const firebaseConfig = {\r\n//   apiKey: \"AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw\",\r\n//   authDomain: \"team-5-7b28e.firebaseapp.com\",\r\n//   projectId: \"team-5-7b28e\",\r\n//   storageBucket: \"team-5-7b28e.appspot.com\",\r\n//   messagingSenderId: \"638627407505\",\r\n//   appId: \"1:638627407505:web:390587f6f32e9467784130\"\r\n// };\r\n\r\n// //from the get method, find out what movie the user wants to see information from\r\n// const movieName = new URLSearchParams(window.location.search).get('movieName')\r\n// console.log(movieName); \r\n// const movieTime = new URLSearchParams(window.location.search).get('movieTime')\r\n// console.log(movieTime); \r\n\r\n// // Initialize Firebase\r\n// const fireApp = initializeApp(firebaseConfig);\r\n// const auth = getAuth(fireApp);\r\n// const db = getFirestore(fireApp);\r\n// const movieCollection = collection(db, 'movie_info')\r\n\r\n// //replace the placeholder info to the actual movie info\r\n// getDocs(movieCollection)\r\n//     .then((snapshot) => {\r\n//         var movieData = \"\"\r\n//         snapshot.docs.forEach((doc) => {\r\n//             if (doc.data().title == movieName) {\r\n//                 movieData = doc.data()\r\n//             }\r\n//         })\r\n//         document.getElementById(\"movie-title\").innerHTML = movieData.title\r\n//         document.getElementById(\"movie-rating\").innerHTML = movieData.rating + \" |\"\r\n//         document.getElementById(\"movie-review\").innerHTML = movieData.review + \" |\"\r\n//         document.getElementById(\"movie-description\").innerHTML = movieData.description + \" |\"\r\n//         document.getElementById(\"movie-length\").innerHTML = movieData.length + \" |\"\r\n//         document.getElementById(\"movie-year\").innerHTML = movieData.year\r\n//         document.getElementById(\"methodMovieImage\").setAttribute(\"src\", movieData.image_link)\r\n//         document.getElementById(\"currentMovieGet\").setAttribute(\"value\", movieData.title)\r\n        \r\n\r\n        \r\n        \r\n\r\n//     })\r\n//     .catch(err => {\r\n//         console.log(err.message)\r\n//     })\r\n\r\n\r\n    //Observer\r\n// onAuthStateChanged(auth, (user) => {\r\n  \r\n//     if (user) {\r\n//       //User is signed in\r\n//       const uid = user.uid;\r\n//       console.log(uid)\r\n//       console.log(\"Signed In to \" + user.displayName)\r\n//     }else {\r\n//       console.log(\"Signed Out\")\r\n//     }\r\n//   })\r\n\r\n\r\n\r\nconst movieName = new URLSearchParams(window.location.search).get('movieName')\r\nconst movieTime = new URLSearchParams(window.location.search).get('movieTime')\r\nconsole.log(movieName); \r\nconsole.log(movieTime); \r\n\r\n\r\nvar weekDayString = sessionStorage.getItem('weekDay')\r\nvar weekDay = JSON.parse(weekDayString)\r\n\r\n\r\nvar ticketsArrayString = sessionStorage.getItem(\"ticketsArray\")\r\nvar ticketsArray = JSON.parse(ticketsArrayString)\r\n\r\nconsole.log(weekDay)\r\nconsole.log(ticketsArray);\r\n\n\n//# sourceURL=webpack://sprint2/./src/detailpage.js?");

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