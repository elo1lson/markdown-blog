'use strict'
const multer = require("multer");
const upload = multer({ dest: "blogs/" });

exports.upload = (req, res) => {
    res.render('uploads')


}