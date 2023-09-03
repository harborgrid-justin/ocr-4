// Version: 1.0.4
// Serial: XYZA6677

module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'An internal error occurred!' });
};
