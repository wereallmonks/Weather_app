const express = require('express');
// const path = require('path');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})
// Router parameters (query string will also work)
app.get('/weather/:cityname', async (request,response) => {
const cityname = request.params.cityname;
const city = cityname.split(" ").join('+')
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=e827cc18a30d7b0beb99903a8635c4d2`
const fetch_response = await fetch(api_url);
const json = await fetch_response.json();
response.json(json);
const location = json.name;
const { icon, description } = json.weather[0];
const { temp, humidity } = json.main;
const { speed } = json.wind;

console.log(description)
});








// const express = require('express');
// // const path = require('path');
// const fetch = require('node-fetch');

// require('dotenv').config();

// const app = express();
// const port = 3000;

// app.use(express.static('public'))
// app.get('/', function(request, response){
//     response.sendFile('/public/index.html');
// });
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// // const api_url = `https://api.openweathermap.org/data/2.5/weather?q=" + 
// // city + 
// // "&units=metric&appid=" + 
// // ${apiKey}`

// // const response = await fetch(api_url);
// // const json = await response.json();
// // console.log(json)

// app.get('/weather/:cityname', async (request,response) => {
//     console.log(request.params);
//     // const api_url = https://api.openweathermap.org/data/2.5/weather?q=" + 
//     // city + 
//     // "&units=metric&appid=" + 
//     // "e827cc18a30d7b0beb99903a8635c4d2"
// const cityname = request.params.cityname.split(" ");
// const city = cityname.join('+')
// const api_url = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=e827cc18a30d7b0beb99903a8635c4d2`
// const fetch_response = await fetch(api_url);
// const json = await fetch_response.json();
// response.json(json);
// });