
function place(){ 
 let visit = document.getElementById('Place').value
console.log(visit)


let p = fetch(`http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=${visit}&aqi=no`);



p.then(response =>{
    if (!response.ok) {
        console.log("There is some error on fetching the data")
    }
    console.log(response.status);
    return response.json();
}).then(data =>{
    console.log(data);
    updateHtml(data)
})
}

// {
// "location": { "name": "Mumbai", "region": "Maharashtra", "country": "India", "lat": 18.98, "lon": 72.83, "tz_id": "Asia/Kolkata", "localtime_epoch": 1703170629, "localtime": "2023-12-21 20:27" },

// "current": { "last_updated_epoch": 1703169900, "last_updated": "2023-12-21 20:15", "temp_c": 29.0, "temp_f": 84.2, "is_day": 0, "condition": { "text": "Overcast", "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png", "code": 1009 }, "wind_mph": 3.8, "wind_kph": 6.1, "wind_degree": 290, "wind_dir": "WNW", "pressure_mb": 1013.0, "pressure_in": 29.91, "precip_mm": 0.0, "precip_in": 0.0, "humidity": 48, "cloud": 50, "feelslike_c": 31.7, "feelslike_f": 89.0, "vis_km": 2.5, "vis_miles": 1.0, "uv": 1.0, "gust_mph": 14.6, "gust_kph": 23.4 }
//  }



function updateHtml(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    // Extract data from the API response
    const location = data.location;
    const currentWeather = data.current;

    // Create elements to display location information
    const locationCard = document.createElement('div');
    locationCard.classList.add('location-card');

    const cityNameElement = document.createElement('h2');
    cityNameElement.textContent = location.name + ', ' + location.region + ', ' + location.country;

    const coordinatesElement = document.createElement('p');
    coordinatesElement.textContent = `Latitude: ${location.lat}, Longitude: ${location.lon}`;

    locationCard.appendChild(cityNameElement);
    locationCard.appendChild(coordinatesElement);

    // Create elements to display current weather information
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${currentWeather.temp_c} °C`;

    const lastUpdatedElement = document.createElement('p');
    lastUpdatedElement.textContent = `Last Updated: ${currentWeather.last_updated}`;

    // Add more elements as needed based on your API response

    weatherCard.appendChild(temperatureElement);
    weatherCard.appendChild(lastUpdatedElement);

    // Append both location and current weather cards to the data container
    dataContainer.appendChild(locationCard);
    dataContainer.appendChild(weatherCard);
}







