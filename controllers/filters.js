const Woord = require('../models/woord');

module.exports.HtoD = (req, res, next) => {
    const opFilter = req.body.filter
    Woord.fetchAll( woorden => {

        res.render('filter.ejs', {
            wsch: woorden,
            fil: opFilter
        });
    
    console.log(opFilter)
    });
};



