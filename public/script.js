const { apiKey } = require("../config");

let weather = {
apiKey,
   fetchWeather: function (city) {  
       fetch(
           "https://api.openweathermap.org/data/2.5/weather?q=" + 
                city + 
                "&units=metric&appid=" + 
                `"${apiKey}"`
        )
        .then((response) => response.json())
       .then((data) => this.displayWeather(data))
   },
   displayWeather: function (data) {
       const { name } = data;
       const { icon, description } = data.weather[0];
       const { temp, humidity } = data.main;
       const { speed } = data.wind;
       const arr = description.split(" ");
       for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
       }
       const str2 = arr.join(" ");

       console.log(name,icon,description,temp,humidity,speed);
       document.querySelector(".city").innerText = "Weather in " + name;
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png ";
       document.querySelector(".description").innerText = str2;
       document.querySelector(".temp").innerText = temp + "°C ";
       document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
       document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
       
   }
};