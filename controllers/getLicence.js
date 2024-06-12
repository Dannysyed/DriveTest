const User = require("../models/User");
module.exports = async (req, res) => {
    const LicenseNumber = req.body.LicenseNumber;
    const hashedLicenseNumber = await bcrypt.hash(LicenseNumber, 10);
    console.log(hashedLicenseNumber, ';;;;;;')
    const user = await User.findOne({ hashedLicenseNumber });
    const UserAuth = req.session.userId
    const UserType = req.session.UserType
    if (!user) {
        return res.render("g_page", { user: undefined, UserAuth, UserType });
    }

    res.render("G_page", { user: user });
}