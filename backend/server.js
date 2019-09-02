//require
const express = require('express');
const bodyParser = require('body-parser');

//define app
const app = express();

//configurations
app.use(bodyParser.json());

//define port
const port = (process.env.port || 8080);

//start server
app.listen(port);
console.log(`Server is listening to ${port}.`);

//expose app
exports = module.exports = app;

//routing
require('./controllers/routeController')(app);