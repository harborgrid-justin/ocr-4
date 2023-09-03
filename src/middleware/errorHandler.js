// Version: 1.1.1
// Serial: IJKL8890

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

module.exports = errorHandler;
