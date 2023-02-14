
// Proof of Concept 

// Flight API KEY
const api_key ='8143e65c-7c54-4b44-9179-9454f8ba3d2e'

// Search Parameter for flight Testing
let flight_iata ='AI126'

// Flight API Fetch URL
let Flight_Api_URL = `https://airlabs.co/api/v9/flight?flight_iata=${flight_iata}&api_key=${api_key}`


let flightSearchText = document.querySelector(".flightSearchText")
let flightbtn = document.querySelector(".flightbtn")

let cardcontainer = document.querySelector(".carddiv")


 // Movie Poster image
let Poster1 = document.querySelector(".movieTestimg1")
let Poster2 = document.querySelector(".movieTestimg2")
let Poster3= document.querySelector(".movieTestimg3")

// Random Number Generator
var radmonNum = [];
while(radmonNum.length < 3){
    var r = Math.floor(Math.random() * 19) + 1;
    if(radmonNum.indexOf(r) === -1) radmonNum.push(r);
}





// Flight API Search 
function FlightDataSearch(){
    
let fligthNumber = flightSearchText.value.replaceAll(" ", "")

fetch(`https://airlabs.co/api/v9/flight?flight_iata=${fligthNumber}&api_key=8143e65c-7c54-4b44-9179-9454f8ba3d2e`)
    .then(response => response.json())
    .then(flightData => {
    console.log(flightData)


    //Parse Flight Info Data
        let FlightNumber = flightData.request.params.flight_iata
        let departTime = flightData.response.dep_time
        let arrivalTime = flightData.response.arr_time
        let flightTime = flightData.response.duration


//console.log(flightTime)
        let card = document.querySelector('.card-body')



        card.innerHTML = `
<p>Flight Number: ${FlightNumber}</p>
<p> Flight Depart Time: ${departTime}</p>
<p>Flight Arrival Time: ${arrivalTime}</p>
<p>Flight Length: ${flightTime} mins </p>
`

})

}



 flightbtn.addEventListener("click",FlightDataSearch)



 // API CALL to FETCH TRENDING  Movie of they day
 fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=  c1d91b870e49691263e4f7d72633542c")
 
  .then(response =>response.json())
  .then(moviedataRandom => {
         console.log(moviedataRandom)
 
         // Parse Poster Path
          let src1 = moviedataRandom.results[radmonNum[0]].poster_path
          let src2 = moviedataRandom.results[radmonNum[1]].poster_path
          let src3 = moviedataRandom.results[radmonNum[2]].poster_path
 
          IdArray= []
 
          radmonNum.forEach(element => {
             // console.log(moviedataRandom.results[element].id)
             IdArray.push(moviedataRandom.results[element].id)
          });
 
          console.log(IdArray)
  
          //Sets Poster src
          Poster1.src = `https://image.tmdb.org/t/p/original${src1}`
          Poster2.src = `https://image.tmdb.org/t/p/original${src2}`
          Poster3.src = `https://image.tmdb.org/t/p/original${src3}`
  
         
       
 
 //store movie id an array 
 
         
      
 
         //fETCh MOVIE GET MOVIE END POINT VIA ID 
         IdArray.forEach(element => {
         fetch (`https://api.themoviedb.org/3/movie/${element}?api_key=  c1d91b870e49691263e4f7d72633542c&language=en-US`)
             
             .then(res => res.json())
             .then(movieinfo => {
                 console.log( `
                 Movie Title: ${movieinfo.original_title}
 
                 Movie RunTime: ${movieinfo.runtime}
 
                 Move Overview: ${movieinfo.overview}`)            //dyna display reponse 
                 console.log(movieinfo)
             })
             
         });
         // for each loop in movie
       // return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c1d91b870e49691263e4f7d72633542c&language=en-US`)
          
  })





    //     .then(response =>response.json())       //retunred array of movie info 
    //     .then(movieByID => {
    //     console.log(movieByID)            //dyna display reponse 
    //     console.log(movieByID.runtime)
    //     console.log(movieByID.poster_path)
    //    // let path  = movieByID.poster_path
    //     //Poster1.src = `https://image.tmdb.org/t/p/original/${path}`
        

     //})
     

 
    