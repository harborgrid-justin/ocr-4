// Version: 1.0.4
// Serial: IJKL9900

module.exports = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
};
