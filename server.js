const express = require('express');
const path= require("path")
const exphbs =require('express-handlebars')
const router = require("./controllers");
// Import the connection object
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const hbs = exphbs.create({})
app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars');
const Users = require('./models/Users');
const ListNames = require('./models/ListNames');
const MovieIds = require('./models/MovieIds');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
app.use(router);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

