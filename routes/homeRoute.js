const router = require("express").Router()

router.get( '/' , async (req, res) => {
  try {
      // res.render("layouts/main");
<<<<<<< HEAD
      console.log(req.session.loggedIn)
      res.render('body', {
=======
      res.render('search', {
>>>>>>> 0ada7fc52b7d8903dbb41ec61393f5e3a3a828eb
        loggedIn: req.session.loggedIn,
      });
  } catch (err) {
      console.log(err)
      res.status(500).json(err)
  }
});


<<<<<<< HEAD

=======
>>>>>>> 0ada7fc52b7d8903dbb41ec61393f5e3a3a828eb
module.exports = router