const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');

router.use('/api', apiRoutes);

router.use('/homepage', homeRoutes);

module.exports = router;
