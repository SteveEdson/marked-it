const test = require('ava');
const md = require('../renderer/markdown-it');

test('Basic markdown', t => {
    const input = `# Hello World
## Heading 2
### Heading 3
This is a sentence with a **bold** word and also *italics*. ~strikethrough~`;

    const output = md.render(input);
    t.snapshot(output);
});

test('Highlighted output', t => {
    const input = `\`\`\`js
console.log('hello world', 10, { foo: 'bar', regex: /[A-z]/ });
\`\`\``;

    const output = md.render(input);
    t.snapshot(output);
});

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