 const  minify = require('html-minifier').minify;

const result = minify('index.html',{removeAttributeQuotes: true});