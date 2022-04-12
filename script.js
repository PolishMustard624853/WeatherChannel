// let apiKey = "eb7c6c94cbc9aa24e851279707916e63";

// getWeather ();

// function getWeather () {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=portland&appid=`)
//         .then(response => response.json())
//         .then (weatherData => {
//             console.log(weatherData);
//         });
// }

let weather = {
    apiKey: "eb7c6c94cbc9aa24e851279707916e63",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    // displayWeather: function(data) {
        
    // }
}