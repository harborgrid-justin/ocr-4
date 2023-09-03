// Version: 1.0.2
// Serial: UVWX8899

const express = require('express');
const analyticsController = require('../../controllers/analytics/analyticsController');

const router = express.Router();

router.get('/most-viewed', analyticsController.getMostViewedPDFs);

module.exports = router;
