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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Import the functions you need from the SDKs you need\r\n// import { initializeApp } from \"firebase/app\"\r\n// import { addDoc, collection,deleteDoc,getDocs,getFirestore,doc,updateDoc } from 'firebase/firestore'\r\n\r\n\r\n// // Your web app's Firebase configuration\r\n// const firebaseConfig = {\r\n//   apiKey: \"AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw\",\r\n//   authDomain: \"team-5-7b28e.firebaseapp.com\",\r\n//   projectId: \"team-5-7b28e\",\r\n//   storageBucket: \"team-5-7b28e.appspot.com\",\r\n//   messagingSenderId: \"638627407505\",\r\n//   appId: \"1:638627407505:web:390587f6f32e9467784130\"\r\n// };\r\n\r\n// // Initialize Firebase\r\n// initializeApp(firebaseConfig)\r\n// const db = getFirestore()\r\n\r\n\r\n// const numPrint = document.querySelector('.addNumbers')\r\n\r\n// numPrint.addEventListener('submit',(event)=>{\r\n//   event.preventDefault()\r\n\r\n//     var x = numPrint.lowerInput.value\r\n//     var y = numPrint.upInput.value\r\n//     if(x>y)\r\n//     {\r\n//       alert(\"Lower input cannot be bigger than Upper Input\")\r\n//     }else \r\n//     for(var i = x; i <=y;i++)\r\n//     {\r\n//       console.log(i)\r\n//     }\r\n\r\n\r\n// })\r\n\r\n  \r\n\r\n// const songsRef = collection(db,'Songs ')\r\n\r\n// getDocs(songsRef)\r\n//   .then((snapshot)=>{\r\n//     let songs = []\r\n//     snapshot.docs.forEach((doc)=>{\r\n//       songs.push({ ...doc.data(),id: doc.id})\r\n//     })\r\n//     console.log(songs)\r\n//   })\r\n//   .catch(err =>{\r\n//     console.log(err.message)\r\n//   })\r\n\r\n\r\n// const addSongsForm = document.querySelector('.add')\r\n\r\n// addSongsForm.addEventListener('submit',(event)=>{\r\n//   event.preventDefault()\r\n\r\n//   const nSongs =\r\n//   {\r\n//     title: addSongsForm.title.value,\r\n//     artist: addSongsForm.artist.value,\r\n//     year: addSongsForm.year.value,\r\n//     rating: addSongsForm.rating.value\r\n//   }\r\n\r\n//   addDoc(songsRef,nSongs)\r\n//   .then(()=>{\r\n//     addSongsForm.reset()\r\n//   })\r\n// })\r\n\r\n// const deleteSongForm = document.querySelector('.delete')\r\n// deleteSongForm.addEventListener('submit',(event)=>{\r\n//   event.preventDefault()\r\n\r\n//   const delRef = doc(songsRef,deleteSongForm.id.value)\r\n\r\n//   deleteDoc(delRef)\r\n//   .then(()=>{\r\n//     deleteSongForm.reset()\r\n//   })\r\n  \r\n// })\r\n\r\n\r\n// const updateForm = document.querySelector('.update')\r\n// updateForm.addEventListener('submit',(event)=>{\r\n//   event.preventDefault()\r\n\r\n//   const updateRef = doc(songsRef,updateForm.id.value)\r\n\r\n//   updateDoc(updateRef,{\r\n//     Rating: updateForm.rating.value\r\n//   })\r\n//   // .then(()=>{\r\n//   //   updateRef.reset()\r\n//   // })\r\n  \r\n// })\n\n//# sourceURL=webpack://sprint2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;