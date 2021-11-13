const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../../classwork/uw-blv-virt-fsf-pt-07-2021-u-c/14-MVC/01-Activities/19-Ins_Middleware/models');
const Users = require('../../models/Users');

// Return the signup/login form
router.get('/login', (req, res) => {
  console.log('now in /login')
  if (req.session.loggedIn) {
    res.redirect('/'); // Is this right?
    return;
  }
  res.render('login');
});

// Sign up a user.
router.post('/', async (req, res) => {
  console.log('now in /signup')

  // My code.
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    const userData = await Users.create(newUser);
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Login a user who already has an account.
router.post('/login', async (req, res) => {
  console.log('now in /login')

  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout a user who is logged in.
router.post('/logout', (req, res) => {
  console.log('now in /logout')
  
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// CREATE a new user
// router.post('/', async (req, res) => {
//   try {
//     const newUser = req.body;
//     // hash the password from 'req.body' and save to newUser
//     newUser.password = await bcrypt.hash(req.body.password, 10);
//     // create the newUser with the hashed password and save to DB
//     const userData = await Users.create(newUser);
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// LOGIN user.




// Set bio field of user.




// Get bio field of user.
router.get('/bio', async (req, res) => {
  // try {
  //   const user = await User.findByPk(req.params.id);
  //   const painting = dbPaintingData.get({ plain: true });
  //   res.render('painting', { painting, loggedIn: req.session.loggedIn });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

// Add favorite for user.




// GetFavorites of user.





module.exports = router;
