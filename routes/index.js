const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homePage');

router.use('/api', apiRoutes);
router.use('/homePage', homeRoutes);

module.exports = router;
