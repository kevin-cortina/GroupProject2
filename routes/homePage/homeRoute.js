const router = require("express").Router()
// const index = require("../../index.html")

router.get('/', async (req, res) => {
    try {
      res.status(200).json({ message: "TESTING!"})
      console.log("this is a test to see if the try is working")
    }
    catch (err) {
        console.log(err)
        console.log("this is a test to see if the catch is working")
        res.status(500).json(err)
    }
})