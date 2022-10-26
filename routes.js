const { Router } = require('express')
const { homeController } = require('./src/controllers/home')
const { articleController } = require('./src/controllers/articles')
const { upload } = require('./src/controllers/uploads')
const route = Router()
const matter = require('gray-matter');
const { getArticleFile } = require('./src/middlewares/article');
const multer = require("multer");
const uploadFile = multer({ dest: "blogs/" });

route.get('/', homeController)
route.get('/articles', getArticleFile, articleController)
route.get('/uploads', upload)

module.exports = route