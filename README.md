# Weather App using Node

## Create an API endpoint for our back-end

_Node must be downloaded in order to create a web server and the download NPM packages_

**Create an app.js file that will be use as a server.**

- Add Express to use in the server in order to add settings such as the port and to write handlers for requests with different HTTP verbs at different URL paths (routes).

- Through OpenWeatherMap (https://openweathermap.org) obtain an API key to add to the server.

- In a GET request, the data will be fetched.

**The API Key can be hidden by created a .env file and adding the key there. Once in the .env file, it can be added to the gitignore file.**

In order to use the API Key in the .env file, dotenv must be _required_ in the app.js file.

## Work on the index.html file

- Add parameters that will be optained in the server as elements in the DOM (i.e. temperature, wind speed, etc.)

## Create a JS file that will serve as the client side for the app.

- Set Santa Barbara as default location. An event listener will need to wait until DOMContent loads in order to populate with data obtained from the server (app.js).

- Create another event listener that will use the city input and render the data after "click" or "enter" is selected.

- Create conditions to handle errors.

- The data will then render in the DOM elements.
