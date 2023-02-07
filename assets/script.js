


// Proof of Concept 

// key
var api_key ='8143e65c-7c54-4b44-9179-9454f8ba3d2e'

// Search Parameter for flight
var flight_iata ='AA6'

// Flight API Fetch URL
var Flight_Api_URL = `https://airlabs.co/api/v9/flight?flight_iata=${flight_iata}&api_key=${api_key}`



function FlightDataSearch(){
fetch("sampledata.txt")

.then(response =>response.json())
.then(flightData => {
    console.log(flightData)
})

}


FlightDataSearch()