// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
// import { addDoc, collection,deleteDoc,getDocs,getFirestore,doc,updateDoc } from 'firebase/firestore'


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCXO12r4N_stiHoEcXrjUJksTniRAOwdxw",
//   authDomain: "team-5-7b28e.firebaseapp.com",
//   projectId: "team-5-7b28e",
//   storageBucket: "team-5-7b28e.appspot.com",
//   messagingSenderId: "638627407505",
//   appId: "1:638627407505:web:390587f6f32e9467784130"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig)
// const db = getFirestore()


// const numPrint = document.querySelector('.addNumbers')

// numPrint.addEventListener('submit',(event)=>{
//   event.preventDefault()

//     var x = numPrint.lowerInput.value
//     var y = numPrint.upInput.value
//     if(x>y)
//     {
//       alert("Lower input cannot be bigger than Upper Input")
//     }else 
//     for(var i = x; i <=y;i++)
//     {
//       console.log(i)
//     }


// })

  

// const songsRef = collection(db,'Songs ')

// getDocs(songsRef)
//   .then((snapshot)=>{
//     let songs = []
//     snapshot.docs.forEach((doc)=>{
//       songs.push({ ...doc.data(),id: doc.id})
//     })
//     console.log(songs)
//   })
//   .catch(err =>{
//     console.log(err.message)
//   })


// const addSongsForm = document.querySelector('.add')

// addSongsForm.addEventListener('submit',(event)=>{
//   event.preventDefault()

//   const nSongs =
//   {
//     title: addSongsForm.title.value,
//     artist: addSongsForm.artist.value,
//     year: addSongsForm.year.value,
//     rating: addSongsForm.rating.value
//   }

//   addDoc(songsRef,nSongs)
//   .then(()=>{
//     addSongsForm.reset()
//   })
// })

// const deleteSongForm = document.querySelector('.delete')
// deleteSongForm.addEventListener('submit',(event)=>{
//   event.preventDefault()

//   const delRef = doc(songsRef,deleteSongForm.id.value)

//   deleteDoc(delRef)
//   .then(()=>{
//     deleteSongForm.reset()
//   })
  
// })


// const updateForm = document.querySelector('.update')
// updateForm.addEventListener('submit',(event)=>{
//   event.preventDefault()

//   const updateRef = doc(songsRef,updateForm.id.value)

//   updateDoc(updateRef,{
//     Rating: updateForm.rating.value
//   })
//   // .then(()=>{
//   //   updateRef.reset()
//   // })
  
// })