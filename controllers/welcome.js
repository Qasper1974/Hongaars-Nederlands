const eerste_woord = {
    woord: 'család',
    vertaling: 'familie'
}

module.exports = (req, res, next) => {
    res.render('welcome.ejs', eerste_woord)
};

