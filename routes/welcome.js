const express = require('express');

const router = express.Router();

const welcomePage = require('../controllers/welcome');
const get404 = require('../controllers/error');

router.get('/welcome', welcomePage.getHomePage);

module.exports = router;
