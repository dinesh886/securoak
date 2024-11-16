// server.js
const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('./src/App').App; // Adjust the path if needed
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public'))); // Serve static files

app.get('*', (req, res) => {
  const context = {};
  const appString = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // Read HTML template
  fs.readFile(path.resolve(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Some error happened');
    }

    // Replace placeholder with rendered HTML
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
    );
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
