const test = require('ava');
const md = require('../renderer/markdown-it');

test('Emoji output', t => {
    const output = md.render(':beer:');
    t.snapshot(output);
});

test('Custom warning container', t => {
    const input = `::: warning
    This is a warning!
    :::`;

    const output = md.render(input);
    t.snapshot(output);
});