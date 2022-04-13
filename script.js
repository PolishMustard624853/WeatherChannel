// fetches weather data from the specified API key
let weather = {
    apiKey: "eb7c6c94cbc9aa24e851279707916e63",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.weatherDisplay(data));
    },
    // stating variables
    weatherDisplay: function(data) {
        let {name} = data;
        let {icon, description} = data.weather[0];
        let {temp, humidity} = data.main;
        let {speed} = data.wind;
    // Below are query selectors that, after being fetched from above, puts the information to the corresponding elements in the html document/ webpage
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    // When user inputs city, 
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
// upon user inputting specified city, then the user can click the search button to the right of the bar and the function above will retrieve information about specified city
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
// upon user inputting specified city, then the user can simply hit enter and the function above will retrieve information about specified city
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    weather.search();
    }
})
// Below pulls information on San Luis Potosi as soon as the webpage is addressed, and will change for user input
weather.fetchWeather("San Luis Potosi");

