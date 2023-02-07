


// Proof of Concept 

// key
var api_key ='8143e65c-7c54-4b44-9179-9454f8ba3d2e'

// Search Parameter for flight
var flight_iata ='AA6'

// Flight API Fetch URL
var Flight_Api_URL = `https://airlabs.co/api/v9/flight?flight_iata=${flight_iata}&api_key=${api_key}`


let flightbtn = document.querySelector(".flightbtn")

let cardcontainer = document.querySelector(".carddiv")


// F
function FlightDataSearch(){
fetch("sampledata.txt")

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





flightbtn.addEventListener("click", FlightDataSearch)