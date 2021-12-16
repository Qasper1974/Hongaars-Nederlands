const Woord = require('../models/woord');

module.exports.getHomePage = (req, res, next) => {
    const filterOpWoord = req.body.filterOpWoord
    const filterOpLes = req.body.filterOpLes
    
    Woord.fetchAll( woorden => {
        res.render('welcome.ejs', {
            wsch: woorden,
            filterOpWoord: filterOpWoord,
            filterOpLes: filterOpLes

        });

    });

};


