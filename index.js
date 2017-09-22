 const  minify = require('html-minifier').minify;

const result = minify('firstpage.html',{removeAttributeQuotes: true});