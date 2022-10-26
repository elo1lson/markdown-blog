'use strict'

exports.homeController = (req, res, next) => {
    console.log(res.locals);
    return res.render('home')
}