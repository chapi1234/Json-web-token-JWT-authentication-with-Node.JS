const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
    // Validate the data before creating a user
    const { error } = registerValidation(req.body);
    if (error) {
        const errorDetails = error.details.map(detail => detail.message);
        return res.status(400).send(errorDetails);
    }

    // Check if the user already exists
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router; 