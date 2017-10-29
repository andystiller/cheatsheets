var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');

Metalsmith(__dirname)         // __dirname defined by node.js:
// name of current working directory
.metadata({                 // add any variable you want
// use them in layout-files
sitename: "Everyday cheatsheets",
siteurl: "http://andyhat.co.uk/cheatsheets",
description: "Commonly used command references",
generatorname: "Metalsmith",
generatorurl: "http://metalsmith.io/"
})
.source('./src')            // source directory
.destination('./build')     // destination directory
.clean(true)                // clean destination before                       // use `collections.posts` in layouts
.use(markdown())            // transpile all md into html
.use(layouts({              // wrap layouts around html
engine: 'twig',     // use the layout engine you like
}))
.build(function(err) {      // build process
if (err) throw err;       // error handling is required
});