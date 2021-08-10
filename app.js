const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

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
const api_key = process.env.API_KEY;
const cityname = request.params.cityname;
// const city = cityname.split(" ").join('+')
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${api_key}`
const fetch_response = await fetch(api_url);
const json = await fetch_response.json();
response.json(json);
const location = json.name;
const { icon, description } = json.weather[0];
const { temp, humidity } = json.main;
const { speed } = json.wind;
});








