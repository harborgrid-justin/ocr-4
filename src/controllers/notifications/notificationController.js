// Version: 1.0.1
// Serial: JKLM5566

const Notification = require('../../models/notificationModel');

exports.createNotification = async (req, res) => {
    try {
        const notification = new Notification({
            message: req.body.message,
            user: req.user._id
        });

        await notification.save();
        res.status(201).send({ message: 'Notification created successfully', notification });
    } catch (error) {
        res.status(500).send({ error: 'Failed to create notification' });
    }
};

exports.getUserNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user._id });
        res.send(notifications);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch notifications' });
    }
};
