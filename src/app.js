const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const fs = require('fs');
const matter = require('gray-matter');
const routes = require('../routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)

app.listen(3000, () => {
    console.log('ok');
})