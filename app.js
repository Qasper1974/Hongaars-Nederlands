const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages')

const welcomeRoute = require('./routes/welcome');

// app.use(bodyparser.urlencoded({extended: false}));


app.use(welcomeRoute);

app.listen(5000);