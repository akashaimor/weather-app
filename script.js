const apiKey = "7b2f5a369c03d9c23b48056ea922b561";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404) {
        alert("City not found!");
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});