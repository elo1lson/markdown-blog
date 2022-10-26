const fs = require('fs')

const { resolve } = require('path')
const { cwd } = require('process')
const matter = require('gray-matter');

exports.getArticleFile = (req, res, next) => {
    const articles = fs.readdirSync(resolve(cwd(), 'blogs'))
    let file
    let article = []
    let titles = []
    for (const key of articles) {
        file = matter.read(resolve(cwd(), `blogs/${key}`));
        let data = [file.data.title, file.data.description]
        titles.push(data)

    }
    res.locals.titles = titles

    next()
}