const express = require('express');

const router = express.Router();

const adminPage = require('../controllers/admin');

router.get('/admin', adminPage.getAdminPage);

router.post('/add-word', adminPage.postWord);

router.post('/add-one-to-class', adminPage.addOneToClass);


module.exports = router;
