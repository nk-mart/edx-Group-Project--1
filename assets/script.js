
// Proof of Concept 


let flightbtn = document.querySelector(".flightbtn")
let flightInput = document.querySelector("#flight-number");

let cardcontainer = document.querySelector(".carddiv")


 // Movie Poster image
let Poster1 = document.querySelector(".movieTestimg1")
let Poster2 = document.querySelector(".movieTestimg2")
let Poster3= document.querySelector(".movieTestimg3")



// Flight API Search 
function FlightDataSearch(){
    // key
const api_key ='8143e65c-7c54-4b44-9179-9454f8ba3d2e'

// Search Parameter for flight
// let flight_iata ='AA6'
let flight_iata = flightInput.value;

// Flight API Fetch URL
let Flight_Api_URL = `https://airlabs.co/api/v9/flight?flight_iata=${flight_iata}&api_key=${api_key}`

fetch(Flight_Api_URL)
.then(response =>response.json())
.then(flightData => {
    console.log(flightData)


    //Parse Flight Info Data

let FlightNumber = flightData.request.params.flight_iata
let departTime = flightData.response.deptime
let arrivalTime = flightData.response.arr_time
let flightTime = flightData.response.duration


console.log(flightTime)

let card = document.querySelector('.card-body')

// togle card info 
cardcontainer.classList.toggle("d-none")


console.log(cardcontainer.classList)

card.innerHTML = `
<p>Flight Number: ${FlightNumber}</p>
<p> Flight Depart Time: ${departTime}</p>
<p>Flight Arrival Time: ${arrivalTime}</p>
<p>Flight Length: ${flightTime} mins </p>
`

})

}

function renderMovieDetails (event) {
    console.log(event.currentTarget)
    let cardcontainer = document.querySelector('#details')
    let card = document.querySelector('#details .card-body')

    let data = {
        title: event.target.getAttribute("data-title"),
        overview: event.target.getAttribute("data-overview"),
        release_date: event.target.getAttribute("data-release_date")
    }

    // togle card info 
    cardcontainer.classList.toggle("d-none")
    
    
    console.log(cardcontainer.classList)
    
    card.innerHTML = `
    <p>Title: ${data.title}</p>
    <p>Overview: ${data.overview}</p>
    <p>Release Date: ${data.release_date}</p>
    `
}

let carouselItems = document.querySelectorAll(".carousel-item img");

for(i = 0; i < carouselItems.length; i++) {
    carouselItems[i].addEventListener("click", renderMovieDetails);
}

console.log(carouselItems)


 flightbtn.addEventListener("click", FlightDataSearch)







// API CALL to FETCH TRENDING  Movie of they day
 fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c1d91b870e49691263e4f7d72633542c")

 .then(response =>response.json())
 .then(moviedataRandom => {
        console.log(moviedataRandom)

        let randomNum1 = Math.floor(Math.random() * 20);
        let randomNum2 = Math.floor(Math.random() * 20);
        let randomNum3 = Math.floor(Math.random() * 20)

        // Parse Poster Path
         let src1 = moviedataRandom.results[randomNum1].poster_path
         let src2 = moviedataRandom.results[randomNum2].poster_path
         let src3 = moviedataRandom.results[randomNum3].poster_path

         ////////////////////
         let title1 = moviedataRandom.results[randomNum1].title
         let title2 = moviedataRandom.results[randomNum2].title
         let title3 = moviedataRandom.results[randomNum3].title

         Poster1.setAttribute("data-title", title1)
         Poster2.setAttribute("data-title", title2)
         Poster3.setAttribute("data-title", title3)
         ///////////////////////////////

         let overview1 = moviedataRandom.results[randomNum1].overview
         let overview2 = moviedataRandom.results[randomNum2].overview
         let overview3 = moviedataRandom.results[randomNum3].overview

         Poster1.setAttribute("data-overview", overview1)
         Poster2.setAttribute("data-overview", overview2)
         Poster3.setAttribute("data-overview", overview3)

         //////////////

         ///////////////////////////////

         let release_date1 = moviedataRandom.results[randomNum1].release_date
         let release_date2 = moviedataRandom.results[randomNum2].release_date
         let release_date3 = moviedataRandom.results[randomNum3].release_date

         Poster1.setAttribute("data-release_date", release_date1)
         Poster2.setAttribute("data-release_date", release_date2)
         Poster3.setAttribute("data-release_date", release_date3)
        
         //Sets Poster src
         Poster1.src = `https://image.tmdb.org/t/p/original${src1}`
         Poster2.src = `https://image.tmdb.org/t/p/original${src2}`
         Poster3.src = `https://image.tmdb.org/t/p/original${src3}`


 
        


            let movieID =  moviedataRandom.results[3].id
     

        //fETCh MOVIE GET MOVIE END POINT VIA ID 
       return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c1d91b870e49691263e4f7d72633542c&language=en-US`)
         
 })

        .then(response =>response.json())
        .then(movieByID => {
        console.log(movieByID)
        console.log(movieByID.runtime)
        console.log(movieByID.poster_path)
       // let path  = movieByID.poster_path
        //Poster1.src = `https://image.tmdb.org/t/p/original/${path}`
        

        //console.log(Poster1.src)

     })
     {}

 
    