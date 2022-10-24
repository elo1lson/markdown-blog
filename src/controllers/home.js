'use strict'

exports.homeController = (req, res, next) => {
    console.log(res.locals);
    res.send('oi')
}