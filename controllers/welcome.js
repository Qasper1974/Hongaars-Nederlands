const eerste_woord = {
    woord: 'család',
    vertaling: 'familie'
}

module.exports.getHomePage = (req, res, next) => {
    res.render('welcome.ejs', eerste_woord)
};

