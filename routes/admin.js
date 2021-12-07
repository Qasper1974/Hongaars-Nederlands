const express = require('express');

const router = express.Router();

const adminPage = require('../controllers/admin');

router.get('/start', adminPage.getAdminPage);

router.post('/add-word', adminPage.postWord)

module.exports = router;
