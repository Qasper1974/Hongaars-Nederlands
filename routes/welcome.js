const express = require('express');

const router = express.Router();

const getWelcomePage = require('../controllers/welcome');

router.get('/welcome', getWelcomePage);

module.exports = router;
