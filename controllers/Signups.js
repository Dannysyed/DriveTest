module.exports = (req, res) => {
    const UserAuth = req.session.userId
    const UserType = req.session.UserType

    res.render("signup", { UserType, UserAuth });
}