const express = require('express');

const router = express.Router();

const welcomePage = require('../controllers/welcome');

router.get('/welcome', welcomePage.getHomePage);

module.exports = router;
