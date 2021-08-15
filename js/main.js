//API token
const myToken = 'f34e15593526751fb72f14c37577629e';

// grab form data
let form = document.querySelector('#search_form');

//add event listener for button, send API data to receive data
// form.addEventListener('click', (event) => {
//     event.preventDefault()
//     let city_name = event.path[0][0].value;
//     getWeather(city_name);
// }); 

//onClick - when button is clicked calls function getWeather()
function getWeather(){
    //getElementById grabs input id=cityName without #
    let cityName = document.getElementById('cityName').value;
    console.log(cityName)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${myToken}`)
    .then(response => response.json())
    .then(data => {
    console.log(data)
        let currentTemp = data.main.temp;
        let min = data.main.temp_min;
        let max = data.main.temp_max;
        let description = data.weather[0].description;
        let humidity = data.main.humidity;
        console.log(currentTemp, min, max, description, humidity)

        //insert element into HTML
        document.querySelector('.city').innerHTML = cityName;
        document.querySelector('.current_temp').innerHTML = currentTemp + "°F";
        document.querySelector('.low_temp').innerHTML = min + "°F";
        document.querySelector('.high_temp').innerHTML = max + "°F";
        document.querySelector('.desc').innerHTML = description;
        document.querySelector('.humidity').innerHTML = "Humidity " + humidity + "%";

        
    })
}; 

