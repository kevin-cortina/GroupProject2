const router = require('express').Router();

const homepage = require('./homeRoute');

router.use('/homeRoute', homepage);

module.exports = router;
