// Version: 1.0.2
// Serial: ABCD0011

const express = require('express');
const apiController = require('../../controllers/api/apiController');

const router = express.Router();

router.get('/pdfs', apiController.getAllPDFs);

module.exports = router;
