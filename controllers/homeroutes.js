const router = require("express").Router()
router.get('/',async (req, res) => {
res.render("search");
//res.render('profile');
});
module.exports = router