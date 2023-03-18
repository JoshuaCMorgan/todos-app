const express = require('express');
const morgan = require('morgan');

const app = express();
const host = 'localhost';
const port = 3000;

// Static data for initial testing
let todoLists = require('./lib/seed-data');

app.set('views', './views'); // where to find views templates
app.set('view engine', 'pug'); // tells to use Pug as view engine

app.use(morgan('common')); // enable logging with morgan
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.render('lists');
});

app.listen(port, host, () => {
  console.log(`listening on port ${port}`);
});
