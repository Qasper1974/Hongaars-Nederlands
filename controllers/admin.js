const Woord = require('../models/woord')

module.exports.getAdminPage = (req, res, next) => {
    res.render('admin.ejs')
};

module.exports.postWord = (req, res, next) => {
    
    const woord = new Woord(
        req.body.woord,
        req.body.vertaling
    )
    
    woord.save();

    res.redirect('/welcome');
    
    res.render('add-word.ejs')

};

