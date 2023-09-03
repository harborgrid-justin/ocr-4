// Version: 1.0.4
// Serial: EFGH8899

module.exports = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).send({ error: 'Access denied. Admins only.' });
    }
};
