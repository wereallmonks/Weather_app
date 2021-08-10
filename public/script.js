const button = document.querySelector(".search button");
const textBox = document.querySelector(".search-bar");

const place = document.querySelector(".city");
const pic = document.querySelector(".icon");
const details = document.querySelector(".description");
const temperature = document.querySelector(".temp");
const humid = document.querySelector(".humidity");
const speed = document.querySelector(".wind");

// Santa Barbara weather as our default
window.addEventListener("DOMContentLoaded", (event) => {
  const myLocation = `weather/santa+barbara`;
  fetch(myLocation).then((response) => {
    response.json().then((data) => {
      place.innerText = "Weather in " + data.name;
      const { icon, description } = data.weather[0];
      const y = description.split(" ");
      for (let i = 0; i < y.length; i++) {
        y[i] = y[i].charAt(0).toUpperCase() + y[i].slice(1);
      }
      const string = y.join(" ");
      details.innerText = string;
      const humidity = data.main.humidity;
      const temp = data.main.temp;
      pic.src = "http://openweathermap.org/img/wn/" + icon + ".png ";
      temperature.textContent = temp + "°C ";
      humid.innerText = "Humidity: " + humidity + "%";
      speed.innerText = "Wind speed: " + data.wind.speed + "km/h";
    });
  });
});

// Search for weather for any city
var searchFunction = function (event) {
  place.textContent = "Searching...";
  temperature.textContent = "";
  details.textContent = "";
  humid.textContent = "";
  speed.textContent = "";
  const cityname = textBox.value;
  const fetchWeather = `weather/${cityname}`;
  fetch(fetchWeather).then((response) => {
    response.json().then((data) => {
      if (data.weather == undefined) {
        place.innerText = "Please enter valid city!";
        pic.src = "";
      } else {
        place.innerText = "Weather in " + data.name;
        const { icon, description } = data.weather[0];
        const y = description.split(" ");
        for (let i = 0; i < y.length; i++) {
          y[i] = y[i].charAt(0).toUpperCase() + y[i].slice(1);
        }
        const string = y.join(" ");
        details.innerText = string;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        pic.src = "http://openweathermap.org/img/wn/" + icon + ".png ";
        temperature.innerText = temp + "°C ";
        humid.innerText = "Humidity: " + humidity + "%";
        speed.innerText = "Wind speed: " + data.wind.speed + "km/h";
      }
    });
  });
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  searchFunction();
});

textBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchFunction();
  }
});
