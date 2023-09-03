// Version: 1.0.0
// Serial: MNOP3456

const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).send({ error: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await user.comparePassword(req.body.password))) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
        res.send({ token });
    } catch (error) {
        res.status(400).send({ error: 'Login failed' });
    }
};
