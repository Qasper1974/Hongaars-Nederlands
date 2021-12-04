const eerste_woord = {
    woord: 'család',
    vertaling: 'familie'
}

module.exports = (req, res, next) => {
    // res.send('<h1>HALLO</h1>');
    res.render('welcome')
};

