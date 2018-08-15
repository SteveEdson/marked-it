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

test('Highlighted unsupported output', t => {
    const input = `\`\`\`fakelang
console.log('hello world', 10, { foo: 'bar', regex: /[A-z]/ });
\`\`\``;

    const output = md.render(input);
    t.snapshot(output);
});

test('Vue pre container', t => {
    const input = `::: v-pre
{{ twigVariable }}
:::`;

    const output = md.render(input);
    t.snapshot(output);
});

test('Mark output', t => {
    const input =
        `An example of ==marked== text`;

    const output = md.render(input);
    t.snapshot(output);
});

test('Inserted output', t => {
    const input =
        `An example of ++inserted++ text`;

    const output = md.render(input);
    t.snapshot(output);
});

test('Abbreviated output', t => {
    const input =
`*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.`;

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