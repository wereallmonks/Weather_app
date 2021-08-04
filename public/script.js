const button = document.querySelector(".search button")
const textBox = document.querySelector(".search-bar") 


const place = document.querySelector(".city");
const icon = document.querySelector(".icon");
const details = document.querySelector(".description");
const temp = document.querySelector(".temp");
const humid = document.querySelector(".humidity");
const speed = document.querySelector(".wind");

button.addEventListener('click', (event) => {
    event.preventDefault();
    place.textContent = "Searching...";
    temp.textContent = "";
    details.textContent= "";
    const cityname = textBox.value
    const fetchWeather = `weather/${cityname}`;
    fetch(fetchWeather).then(response => {
        response.json().then(data => {
            place.innerText = "Weather in " + data.name;
            console.log(data.wind)
            const { icon, description } = data.weather[0];
            const info = description
            const y = info.split(" ");
                for (let i = 0; i < y.length; i++) {
                    y[i] = y[i].charAt(0).toUpperCase() + y[i].slice(1); 
                };
            const string = y.join(" ");
            details.innerText = string;
            const { temp, humidity } = data.main
            icon.src = "http://openweathermap.org/img/wn/" + icon + ".png ";
            temp.innerText = data.main + "°C ";
            humid.innerText = "Humidity: " + humidity + "%";
            speed.innerText = "Wind speed: " + data.wind.speed + "km/h";        
        })  
    })
})



// let weather, main, wind;
// try {
//     async function fetchWeather() {
//         cityname = document.querySelector(".search-bar").value 
//         const api_url = `/weather/${cityname}`
//         const response = await fetch(api_url);
//         const json = await response.json()
//         const cityname = json(data)     
//     }
// } catch (error) {
//     console.error(error);
//     name = { value: ""};
//     document.querySelector(".search-bar").textContent = "Enter a valid city"
// }



  






    

// let weather = {
// apiKey,
//    fetchWeather: function (city) {  
//        fetch(
//            "https://api.openweathermap.org/data/2.5/weather?q=" + 
//                 city + 
//                 "&units=metric&appid=" + 
//                 `"${apiKey}"`
//         )
//         .then((response) => response.json())
//        .then((data) => this.displayWeather(data))
//    },
//    displayWeather: function (data) {
//        const { name } = data;
//        const { icon, description } = data.weather[0];
//        const { temp, humidity } = data.main;
//        const { speed } = data.wind;
//        const arr = description.split(" ");
//        for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//        }
//        const str2 = arr.join(" ");

//        console.log(name,icon,description,temp,humidity,speed);
//        document.querySelector(".city").innerText = "Weather in " + name;
//        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png ";
//        document.querySelector(".description").innerText = str2;
//        document.querySelector(".temp").innerText = temp + "°C ";
//        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
       
//    }
// };