const User = require("../models/User");
module.exports = async (req, res) => {
    console.log(req.session.userId, '{}{}{}{}{}{}{}{')
    // bcrypt.compare(password, user.password, (error, same) => {
    const UserAuth = req.session.userId
    const UserType = req.session.driverType
    const Users = await User.findById(UserAuth)

    console.log(Users, 'sasdfa', req.session.userId);
    console.log('asdf')
    res.render("G_page", { user: Users, UserType, UserAuth });
}