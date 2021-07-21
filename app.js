const express = require('express');
const path = require('path');
require('dotenv').config();

console.log(process.env)

const app = express();
const port = 3000;

app.use(express.static('public'))
app.get('/', function(request, response){
    response.sendFile('/public/index.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



