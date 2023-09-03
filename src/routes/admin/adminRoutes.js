// Version: 1.0.3
// Serial: MNOP3344

const express = require('express');
const adminController = require('../../controllers/admin/adminController');
const authMiddleware = require('../../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware.authenticate); // Ensure only authenticated users can access admin routes

router.get('/users', adminController.getAllUsers);
router.delete('/users/:id', adminController.deleteUser);

module.exports = router;
