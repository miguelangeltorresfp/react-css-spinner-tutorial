const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const express = require('express');
const { Ripple } = require('react-css-spinners-tutorial');

const app = express();
const port = 3000;
app.get('*', (req, res) => {
  const html = renderToString(createElement(Ripple));
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
