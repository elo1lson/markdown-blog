'use strict'

const fs = require('fs')
const { resolve } = require('path')
const { cwd } = require('process')
const matter = require('gray-matter');

exports.articleController = (req, res) => {
    const articles = fs.readdirSync(resolve(cwd(), 'blogs'))
    let file
    let titles = []
    for (const key of articles) {
        file = matter.read(resolve(cwd(), `blogs/${key}`));
        titles.push(file.data.title)
    }
    res.render('articles', {
        titles
    })
}