const express = require('express');
const exphbs =require('express-handlebars')
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

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

