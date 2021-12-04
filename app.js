const express = require('express');

const welcomeRoute = require('./routes/welcome')

const app = express();

app.use('/', welcomeRoute);

app.listen(5000);