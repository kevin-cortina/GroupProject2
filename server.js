const express = require('express');
const path= require("path")
const exphbs =require('express-handlebars')
const router = require("./controllers");
const routes = require('./routes');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import the connection object
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const hbs = exphbs.create({})
app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars');
<<<<<<< HEAD

app.engine('hbs',handlebars({
  layoutsDir : __dirname + '/views/layouts',
  defaultLayout : "mainLayout",
  extname : "hbs",
  partialsDir : __dirname + '/views/partial/'
}))

=======
>>>>>>> bac2e48879e81bf2d3e16d3f8447aac6277992d2
//const Users = require('./models/Users');
//const sequelize = require('./config/connection');

//const app = express();
//const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
app.use(router);
app.use(routes);


// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



