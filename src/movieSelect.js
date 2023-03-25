
//getting the information from session storage
var movieDataString = sessionStorage.getItem('movieData')
var movieData = JSON.parse(movieDataString)


//replacing place holder information

//images
document.getElementById("movieSelect1Image").setAttribute("src", movieData[0].image_link)
document.getElementById("movieSelect2Image").setAttribute("src", movieData[1].image_link)
document.getElementById("movieSelect3Image").setAttribute("src", movieData[2].image_link)
document.getElementById("movieSelect4Image").setAttribute("src", movieData[3].image_link)

//titles
document.getElementById("movieSelect1Title").innerHTML = movieData[0].title
document.getElementById("movieSelect2Title").innerHTML = movieData[1].title
document.getElementById("movieSelect3Title").innerHTML = movieData[2].title
document.getElementById("movieSelect4Title").innerHTML = movieData[3].title

//descriptions
document.getElementById("movieSelect1Description").innerHTML = movieData[0].description
document.getElementById("movieSelect2Description").innerHTML = movieData[1].description
document.getElementById("movieSelect3Description").innerHTML = movieData[2].description
document.getElementById("movieSelect4Description").innerHTML = movieData[3].description

//details
document.getElementById("movieSelect1Details").innerHTML = movieData[0].review + " | " + movieData[0].length + " | " + movieData[0].rating
document.getElementById("movieSelect2Details").innerHTML = movieData[1].review + " | " + movieData[1].length + " | " + movieData[1].rating
document.getElementById("movieSelect3Details").innerHTML = movieData[2].review + " | " + movieData[2].length + " | " + movieData[2].rating
document.getElementById("movieSelect4Details").innerHTML = movieData[3].review + " | " + movieData[3].length + " | " + movieData[3].rating

//movie values
document.getElementById("movieSelect1Value").setAttribute("value", movieData[0].title)
document.getElementById("movieSelect2Value").setAttribute("value", movieData[1].title)
document.getElementById("movieSelect3Value").setAttribute("value", movieData[2].title)
document.getElementById("movieSelect4Value").setAttribute("value", movieData[3].title)




