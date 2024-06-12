const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    console.log(password, "asdf", user.password);
    bcrypt.compare(password, user.password, (error, same) => {
      if (same) {
        req.session.userId = user._id;
        req.session.driverType = user.userType;
        console.log(req.session.userId, req.session.driverType);
        res.redirect("/");
        console.log("User was authenticated");
      } else {
        res.redirect("/login");
      }
    });
  } catch (error) {
    console.log(error);
    res.redirect("/login");
  }
};
