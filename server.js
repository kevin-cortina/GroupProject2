const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');

const Users = require('./models/Users');
const ListNames = require('./models/ListNames');
const MovieIds = require('./models/MovieIds');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const addList = (listName, userId) => {
  ListNames.create({
    listName: listName,
    userId: userId
  })
  .then( (newList) => {
    console.log('New list created', newList.id, newList.listName, newList.userId)
  })
};
addList('my list', 5);

const addMovieId = (movieId) => {
  MovieIds.create({
    movieIds: movieId
  })
  .then( (newMovieId) => {
    console.log('Movie id added:', newMovieId);
  });
}
addMovieId(666);

