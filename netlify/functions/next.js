const { createHandler } = require('@netlify/functions');
const next = require('next');

const app = next({ dev: false });
const handler = createHandler(app);

app.prepare().then(() => {
  exports.handler = handler;
});