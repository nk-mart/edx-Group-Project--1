let movieAPIKey = 'c1d91b870e49691263e4f7d72633542c'
let flightAPIKey = 'ebc56f4c-51a8-465c-a38e-e7a9e06ee070'
let departure = document.querySelectorAll('.dep_icao');
let arrival = document.querySelector('.arr_icao');
let flightStatus = document.querySelector('.status');

const flightDropdown = $("#flight-selection");
const flightName = $("#flight-name");
const flightDuration = $("#flight-duration");


// <li><a class="dropdown-item" href="#">Flight</a></li>
function getAllFlights() {
    // fetch("URL")
    // .then(response => response.json())
    // .then(data => {
        const flightArray = flightData.data;
        console.log(flightArray)

        for(i = 0; i < flightArray.length; i++) {
            const newLi = $("<li>");
            const newA = $("<a>");
            newA.addClass("dropdown-item");
            newA.attr("href", "#");
            newA.text(flightArray[i].flight.number)

            newLi.append(newA);
            newLi.attr("data-name", flightArray[i].flight.number )
            newLi.attr("data-duration", "7hrs 47 mins" )
            newLi.on("click", renderFlightInfo)

            flightDropdown.append(newLi)
        }
    // })
}

function renderFlightInfo() {
    console.log(this);
    flightName.text($(this).attr("data-name"))
    flightDuration.text($(this).attr("data-duration"))
}

getAllFlights()