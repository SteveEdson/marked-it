const getStdin = require('get-stdin');
const md = require('./renderer/markdown-it');

getStdin().then(str => {
    console.log(md.render(str));
});

