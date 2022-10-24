const { Router } = require('express')
const { homeController } = require('./src/controllers/home')
const { articleController } = require('./src/controllers/articles')
const route = Router()
const matter = require('gray-matter');

route.get('/', homeController)
route.get('/articles', articleController)

/*
route.get("/blog/:article", (req, res) => {

    // read the markdown file
    const file = matter.read(__dirname + '/a.md');

    // use markdown-it to convert content to HTML
    var md = require("markdown-it")();
    let content = file.content;
    var result = md.render(content);

    res.send(content)
    /* res.send({
       post: result,
       title: file.data.title,
       description: file.data.description,
       image: file.data.image
     });
});*/

module.exports = route