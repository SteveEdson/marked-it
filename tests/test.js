const test = require('ava');
const md = require('../renderer/markdown-it');

test('Emoji output', t => {
    const output = md.render(':beer:');
    t.snapshot(output);
});