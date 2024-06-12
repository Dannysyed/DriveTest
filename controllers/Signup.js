const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        const { username, password, userType } = req.body;

        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Hash the password before saving it
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with default values
        const newUser = new User({
            username,
            password: hashedPassword,
            userType,
        });
        console.log(newUser, '++++++++')
        // Save the user to the database
        await newUser.save();

        // res.status(201).json({ message: 'User registered successfully' });
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}