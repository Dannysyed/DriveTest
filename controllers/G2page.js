const User = require("../models/User");
module.exports = async (req, res) => {
    const UserAuth = req.session.userId
    const UserType = req.session.driverType
    const Users = await User.findById(UserAuth)
    console.log(Users, '//////')
    res.render("G2_page", { UserType, UserAuth, user: Users });
}