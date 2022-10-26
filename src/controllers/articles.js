'use strict'

const { resolve } = require('path')
const { cwd } = require('process')
const matter = require('gray-matter');

exports.articleController = (req, res) => {
    console.log(req.query);
    let titles = res.locals.titles
    let articles = {
        title:res.locals.titles
    }
    if (Object.keys(req.query).length == 0) {
        return res.render('articles', {
            
        })
    }
    let articleName = req.query.name

    if (titles.includes(articleName)) {
        console.log('oi');
        return res.status(200).send('articlePage')
    }
    return res.status(404).send('404')

}

exports.articleControllerView = (req, res) => {
    res.send('oi')

    res.locals.titles.forEach(title => {

    });
}