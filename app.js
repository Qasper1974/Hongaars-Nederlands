const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages')

app.use(express.static(path.join(__dirname, 'public')));

const welcomeRoutes = require('./routes/welcome');
const error = require('./routes/error');


// app.use(bodyparser.urlencoded({extended: false}));


app.use(welcomeRoutes);
app.use(error);

app.listen(5000);