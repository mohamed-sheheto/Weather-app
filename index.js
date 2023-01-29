/**
     * Weather App
    * TODO: Complete getWeatherData() to return json response Promise
     * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/




// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    })
        .then(data => data)
        .catch(err => console.log(err))
}
//HINT: Use template literals to create a url with input and an API key

//CODE GOES HERE

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)
    // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    //CODE GOES HERE

    const temp = document.getElementById('temp')
    temp.innerText = weatherData.main.temp

    const minTemp = document.getElementById('min-temp')
    minTemp.innerText = weatherData.main.temp_min

    const maxTemp = document.getElementById('max-temp')
    maxTemp.innerText = weatherData.main.temp_max

    const cityName = document.getElementById('city-name')
    cityName.innerText = weatherData.name

    const weatherType = document.getElementById('weather-type')
    weatherType.innerText = weatherData.weather[0].main
}

