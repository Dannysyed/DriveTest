module.exports = function ensureAuthenticated(req, res, next) {

    if (req.session.userId) {
        // User is authenticated
        if (req.session.driverType === 'Driver') {
            // User is a Driver, allow access

            next();
        } else {
            // User is not a Driver, deny access
            res.redirect('/'); // Redirect to a different page or display an error
        }
        // return next();
    }
}
