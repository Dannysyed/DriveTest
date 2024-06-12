function authenticateUser(req, res, next) {
    if (req.isAuthenticated()) {
        // User is authenticated, continue to the next middleware/route
        return next();
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login');
    }
}
