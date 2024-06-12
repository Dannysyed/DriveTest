const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    try {
        const UserAuth = req.session.userId
        const UserType = req.session.driverType

        // Find the existing user by ID
        const existingUser = await User.findById(UserAuth);

        if (existingUser) {
            // If the user already exists, update the user's data
            await User.findByIdAndUpdate(
                UserAuth, // User ID to update
                { $set: req.body }, // Update the user with the request body
                { new: true } // Return the updated user data
            );

            console.log('User data has been updated');
            res.redirect('/g');
        } else {
            // If the user does not exist, create a new user
            const newUser = await User.create(req.body);
            console.log(newUser);
            console.log(req.body);
            console.log('New user has been created');
            res.redirect('/g');
        }
    } catch (error) {
        console.log(error);
    }
};
