const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const app = express();

const port = (process.env.PORT || 8080);
const root = path.join(__dirname, '../build');

app.use(morgan('dev'));
app.use(express.static(root));
app.use(favicon(path.join(root, 'favicon.ico')));
app.use(fallback('index.html', { root: root }))
app.get('/', function (req, res) {
  res.sendFile(path.join(root, 'index.html'));
});

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});