const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages')

app.use(express.static(path.join(__dirname, 'public')));

const welcomeRoute = require('./routes/welcome');

// app.use(bodyparser.urlencoded({extended: false}));


app.use(welcomeRoute);

app.listen(5000);