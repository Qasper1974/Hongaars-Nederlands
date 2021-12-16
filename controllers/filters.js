const Woord = require('../models/woord');

module.exports.HtoD = (req, res, next) => {
    const filterOpWoord = req.body.filterOpWoord
    const filterOpLes = req.body.filterOpLes
    
    Woord.fetchAll( woorden => {

        res.render('filter.ejs', {
            wsch: woorden,
            filterOpWoord: filterOpWoord,
            filterOpLes: filterOpLes
        });
    
    console.log(filterOpWoord)
    });
};



