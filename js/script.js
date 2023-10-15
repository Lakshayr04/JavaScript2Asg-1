/*
    {Assignment 4 - Lakshay Rajput}
*/
$(function () {
    // Check if geolocation is available
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(newLocation, () => {
            console.log("Location services not available.");
        });
    } else {
        locationhere.innerHTML = "Geolocation isn't available here, sorry!";
    }

    let locationhere = document.getElementById("locationhere");

    // Retrieve previous location
    let prevlat = parseFloat(localStorage.getItem("lat"));
    let prevlong = parseFloat(localStorage.getItem("long"));

    if (prevlat) {
        locationhere.innerHTML = `<h1>Welcome Back !</h1> You were last at: <br /> Latitude: ${prevlat} <br /> Longitude: ${prevlong}`;
    } else {
        locationhere.innerHTML = "Welcome!";
    }

    function newLocation(position) {
        let currentlat = position.coords.latitude;
        let currentlong = position.coords.longitude;

        localStorage.setItem('lat', currentlat);
        localStorage.setItem('long', currentlong);

        let p = document.createElement('p');
        locationhere.appendChild(p);

        p.innerHTML = `<div id='newlocation'>Your current location is: <br /> Latitude: <span id='currentlat'>${currentlat}</span><br /> Longitude: <span id='currentlong'>${currentlong}</span></div>`;

        if (prevlat) {
            if (prevlat === currentlat && prevlong === currentlong) {
                p.append("You haven't moved since you last checked!");
            } else {
                calcDistanceBetweenPoints();
            }
        }

        function calcDistanceBetweenPoints() {
            // Retrieve previous location from local storage
            let prevlat = parseFloat(localStorage.getItem("lat"));
            let prevlong = parseFloat(localStorage.getItem("long"));

            // Retrieve current location
            let currentlat = parseFloat(locationhere.querySelector('#newlocation #currentlat').textContent);
            let currentlong = parseFloat(locationhere.querySelector('#newlocation #currentlong').textContent);

            // Using Haversine formula
            function toRadians(degrees) {
                return degrees * Math.PI / 180;
            }

            function calcHaversine(lat1, lon1, lat2, lon2) {
                const R = 6371; // Earth's radius in km

                const dLat = toRadians(lat2 - lat1);
                const dLon = toRadians(lon2 - lon1);

                const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                const distance = R * c * 1000; // Convert to meters
                return distance;
            }

            // Calculate distance
            const distance = calcHaversine(prevlat, prevlong, currentlat, currentlong);

            // Display distance to the user
            let distanceMessage = `You have traveled ${distance.toFixed(2)} meters since your last visit.`;
            locationhere.querySelector('#newlocation').appendChild(document.createElement('p'));
            locationhere.querySelector('#newlocation p:last-child').innerHTML = distanceMessage;
        }
    }




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


