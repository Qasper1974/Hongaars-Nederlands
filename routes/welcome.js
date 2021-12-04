const express = require('express');

const router = express.Router();

router.get('/welcome', (req, res, next)=>{
    res.send('<h3>Welkom op mijn woordenboek Hongaars-Nederlands!</h3>')
});

module.exports = router;
