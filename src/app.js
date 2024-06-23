const express = require('express');
const path = require('path');
const routes = require('./routes');
var compression  = require('compression');

const app = express();
const port = process.env.PORT || 80;

app.get('/', routes.index);

express.static.mime.define({'application/wasm': ['wasm']});
app.use(compression());
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('Server started at http://localhost:' + port);