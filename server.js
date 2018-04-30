const express = require('express');
const app = express();
const path = require('path')
const json = require('./json.js')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(express.static('public'))

app.use(urlLogger, timeLogger)

app.get('/', (request, response) => {

});

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname, './public', 'sunsets.html'))
});

app.get('/json', (request, response) => {
  response.status(200).json({name: 'Robbie'});
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(function (req, res, next) {
  res.status(404).send("Something isnt working!")
})