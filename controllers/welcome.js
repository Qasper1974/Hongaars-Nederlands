const Woord = require('../models/woord');

module.exports.getHomePage = (req, res, next) => {
    Woord.fetchAll( woorden => {
        res.render('welcome.ejs', {
            wsch: woorden
        });

    });

};


