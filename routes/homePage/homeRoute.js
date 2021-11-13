// const router = require("express").Router()
// // const index = require("../../index.html")

// router.get('/', async (req, res) => {
//     try {
//       res.render("main")
//       console.log("this is a test to see if the try is working")
//     }
//     catch (err) {
//         console.log(err)
//         console.log("this is a test to see if the catch is working")
//         res.status(500).json(err)
//     }
// })

const router = require("express").Router()

router.get( '/' , async (req, res) => {
  try {
      res.render("layouts/main");
  } catch (err) {
      console.log(err)
      res.status(500).json(err)
  }
});

module.exports = router