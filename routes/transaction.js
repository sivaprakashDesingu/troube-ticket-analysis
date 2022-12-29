var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var transationController = require('../controllers/Transaction');


// a simple test url to check that all of our files are communicating correctly.
router.get('/getChannelCount', transationController.getChannelCount);
router.get('/getMetrics', transationController.getMetrics);
router.post('/saveTickets', transationController.saveTickets);

module.exports = router;