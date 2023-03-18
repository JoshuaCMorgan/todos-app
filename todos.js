const express = require('express');
const morgan = require('morgan');

const app = express();
const host = 'localhost';
const port = 3000;

app.set('views', './views'); // where to find views templates
app.set('views engine', 'pug'); // tells to use Pug as view engine

app.use(morgan('common')); // enable logging with morgan

app.get('/', (req, res, next) => {
  res.render('list')
})

app.listen(port, host, () => {
  console.log(`listening on port ${port}`);
});
