// Version: 1.0.0
// Serial: QRST6789

const express = require('express');
const authController = require('../../controllers/user/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
