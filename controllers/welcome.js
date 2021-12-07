const Woord = require('../models/woord');

module.exports.getHomePage = (req, res, next) => {
    const woordenschat = Woord.fetchAll();

    res.render('welcome.ejs', {
        wsch : woordenschat
    });

    console.log(woordenschat);
};


