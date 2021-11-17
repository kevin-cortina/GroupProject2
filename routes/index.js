const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
// const search = require('./resultsCard');

router.use('/api', apiRoutes);
// router.use('/resultsCard', search);
router.use('/', homeRoutes);

module.exports = router;
