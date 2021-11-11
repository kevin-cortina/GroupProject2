const express = require('express');
const routes = require('./routes');

// Import the connection object
const sequelize = require('./config/connection');

const Users = require('./models/Users');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// Temporary code.
const addUser = (username, password) => {
  Users.create({
    username: username,
    password: password
  })
    .then((newUser) => {
      // Send the newly created row as a JSON object
      console.log('Created User with id:', newUser.id);
    })
};
addUser('New User', 'myPassword');


