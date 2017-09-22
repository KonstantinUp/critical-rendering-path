const express = require('express');
const  minify = require('html-minifier').minify;
const app = express();

app.get('/',function (res,req) {
    const result = minify('firstpage.html',{removeAttributeQuotes: true});
    res.render('result')
});
