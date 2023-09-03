// Version: 1.0.2
// Serial: NOPQ6677

const express = require('express');
const notificationController = require('../../controllers/notifications/notificationController');

const router = express.Router();

router.post('/create', notificationController.createNotification);
router.get('/user', notificationController.getUserNotifications);

module.exports = router;
