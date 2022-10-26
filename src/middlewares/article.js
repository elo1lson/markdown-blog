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
        let data = [file.data.title, file.data.description, file.data.image]
        titles.push(data)

    }
    res.locals.titles = titles

    next()
}
exports.getArticle = (name) => {
    const articles = fs.readdirSync(resolve(cwd(), 'blogs'))
    let file
    let article = {}
    let titles = []
    for (const key of articles) {
        file = matter.read(resolve(cwd(), `blogs/${key}`));
        if (file.data.title !== name) continue

        var md = require("markdown-it")();
        let content = file.content;
        var result = md.render(content);
        article.title = file.data.title
        article.description = file.data.description
        article.image = file.data.image
        article.post = result

    }
    return article

}