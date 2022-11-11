const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 8080;
const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'))

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// //Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
