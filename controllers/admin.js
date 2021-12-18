const Woord = require('../models/woord')

module.exports.getAdminPage = (req, res, next) => {
    // res.render('admin.ejs')

    Woord.currentClass(classes => {

        res.render('admin.ejs', {
            currentClass: classes[0]["huidigeLes"]
        });
    
    });
};

module.exports.postWord = (req, res, next) => {
    
    const woord = new Woord(
        req.body.woord,
        req.body.vertaling,
        req.body.les
    )
    
    woord.save();

    Woord.currentClass(classes => {

        res.render('admin.ejs', {
            currentClass: classes[0]["huidigeLes"]
        });
    });
};

module.exports.addOneToClass = (req, res, next) => {
    console.log("kaka")
    // Woord.currentClass(classes => {
        
    //     res.redirect('/admin');

    //     res.render('admin.ejs', {
    //         currentClass: classes[0]["huidigeLes"] + 1
    //     });
        
    // });

};

