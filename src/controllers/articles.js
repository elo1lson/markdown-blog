'use strict'

const { resolve } = require('path')
const { cwd } = require('process')
const matter = require('gray-matter');
const { getArticle } = require('../middlewares/article');

exports.articleController = (req, res) => {
   if(Object.keys(req.query).length == 0){
        return res.render('articles', {
            titles: res.locals.titles
        })
    }
    let flag = false
    console.log(req.query);
    let titles = res.locals.titles
    titles.forEach(t => {
        if (t[0] == req.query.name) {
            flag = true
            return res.render('articleView', {
                article: getArticle(req.query.name)
            })
        }
    })
    if (!flag) {
        return res.render('404')
    }

}
