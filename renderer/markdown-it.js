const emoji = require('markdown-it-emoji');
const container = require('markdown-it-container');
const highlight = require('./highlight');

function createContainer(klass, defaultTitle) {
    return [container, klass, {
        render (tokens, idx) {
            const token = tokens[idx];
            const info = token.info.trim().slice(klass.length).trim();
            if (token.nesting === 1) {
                return `<div class="${klass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`
            } else {
                return `</div>\n`
            }
        }
    }]
}

const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    highlight,
})
    .use(emoji)
    .use(...createContainer('tip', 'TIP'))
    .use(...createContainer('warning', 'WARNING'))
    .use(...createContainer('danger', 'WARNING'))
    .use(container, 'v-pre', {
        render: (tokens, idx) => tokens[idx].nesting === 1
            ? `<div v-pre>\n`
            : `</div>\n`
    });

module.exports = md;