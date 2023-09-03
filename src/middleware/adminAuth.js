// Version: 1.1.1
// Serial: EFGH7789

const User = require('../models/userModel');

const adminAuth = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            throw new Error();
        }
        next();
    } catch (e) {
        res.status(403).send({ error: 'Admin access required.' });
    }
};

module.exports = adminAuth;
