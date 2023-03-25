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

/***/ "./src/movieSelect.js":
/*!****************************!*\
  !*** ./src/movieSelect.js ***!
  \****************************/
/***/ (() => {

eval("\r\n//getting the information from session storage\r\nvar movieDataString = sessionStorage.getItem('movieData')\r\nvar movieData = JSON.parse(movieDataString)\r\n\r\n\r\n//replacing place holder information\r\n\r\n//images\r\ndocument.getElementById(\"movieSelect1Image\").setAttribute(\"src\", movieData[0].image_link)\r\ndocument.getElementById(\"movieSelect2Image\").setAttribute(\"src\", movieData[1].image_link)\r\ndocument.getElementById(\"movieSelect3Image\").setAttribute(\"src\", movieData[2].image_link)\r\ndocument.getElementById(\"movieSelect4Image\").setAttribute(\"src\", movieData[3].image_link)\r\n\r\n//titles\r\ndocument.getElementById(\"movieSelect1Title\").innerHTML = movieData[0].title\r\ndocument.getElementById(\"movieSelect2Title\").innerHTML = movieData[1].title\r\ndocument.getElementById(\"movieSelect3Title\").innerHTML = movieData[2].title\r\ndocument.getElementById(\"movieSelect4Title\").innerHTML = movieData[3].title\r\n\r\n//descriptions\r\ndocument.getElementById(\"movieSelect1Description\").innerHTML = movieData[0].description\r\ndocument.getElementById(\"movieSelect2Description\").innerHTML = movieData[1].description\r\ndocument.getElementById(\"movieSelect3Description\").innerHTML = movieData[2].description\r\ndocument.getElementById(\"movieSelect4Description\").innerHTML = movieData[3].description\r\n\r\n//details\r\ndocument.getElementById(\"movieSelect1Details\").innerHTML = movieData[0].review + \" | \" + movieData[0].length + \" | \" + movieData[0].rating\r\ndocument.getElementById(\"movieSelect2Details\").innerHTML = movieData[1].review + \" | \" + movieData[1].length + \" | \" + movieData[1].rating\r\ndocument.getElementById(\"movieSelect3Details\").innerHTML = movieData[2].review + \" | \" + movieData[2].length + \" | \" + movieData[2].rating\r\ndocument.getElementById(\"movieSelect4Details\").innerHTML = movieData[3].review + \" | \" + movieData[3].length + \" | \" + movieData[3].rating\r\n\r\n//movie values\r\ndocument.getElementById(\"movieSelect1Value\").setAttribute(\"value\", movieData[0].title)\r\ndocument.getElementById(\"movieSelect2Value\").setAttribute(\"value\", movieData[1].title)\r\ndocument.getElementById(\"movieSelect3Value\").setAttribute(\"value\", movieData[2].title)\r\ndocument.getElementById(\"movieSelect4Value\").setAttribute(\"value\", movieData[3].title)\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sprint2/./src/movieSelect.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/movieSelect.js"]();
/******/ 	
/******/ })()
;